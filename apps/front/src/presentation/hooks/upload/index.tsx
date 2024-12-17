import { Upload } from "@/application/use-cases/utilitaria/upload/upload.use-case";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { convertToBase64 } from "@/common/utils";
import { toastInvoker } from "@repo/ui";
import { AxiosError } from "axios";
import { TError } from "../../../../../../packages/ui/src/utils/types";
import { UploadRequest } from "@/domain/interfaces/utilitaria/upload/upload.response";

export default function useUpload() {
  const [imagePreview, setImagePreview] = useState<string>("");
  const [nameDocument, setNameDocument] = useState<string>("");

  //Mutation
  const mutation = useMutation({
    mutationKey: ["Upload"],
    mutationFn: async (request: UploadRequest) => await Upload(request),
  });

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event, "🥲🥲");
    const file = event.target.files?.[0];

    if (file) {
      const fileSizeInBytes = file.size; // Tamaño en bytes
      // const fileSizeInMB = fileSizeInBytes / (1024 * 1024); // Tamaño en megabytes
      const fileSizeInMB_Decimal = fileSizeInBytes / 1000000; // Escala decimal

      console.log("😈", fileSizeInBytes);
      console.log("😈😈", fileSizeInMB_Decimal);
      setNameDocument(file?.name);
      const base64String = await convertToBase64(file);
      setImagePreview(base64String);
    }
  };

  const handleUpload = () => {
    if (!imagePreview) {
      toastInvoker("No se ha seleccionado ningún archivo", "error");
    } else {
      mutation.mutate(
        {
          base64: imagePreview,
          folder: "videos",
          type: "video",
          name: nameDocument,
        },
        {
          onSuccess: () => {
            toastInvoker("Archivo subido correctamente", "success");
          },
          onError: (error) => {
            console.log(error, 88);
            if (error instanceof AxiosError) {
              const message = (error as TError)?.response?.data?.message;
              toastInvoker(message, "error");
            }
          },
        }
      );
    }
  };

  return { handleFileChange, handleUpload };
}
