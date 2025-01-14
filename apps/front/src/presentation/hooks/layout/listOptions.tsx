import { UpdateUser } from "@/application/use-cases/security/user/updateUser.use-case";
import { convertToBase64 } from "@/common/utils";
import { UpdateUserRequest } from "@/domain/interfaces/security/user/userResponse";
import {
  useDataImageStore,
  useFileUploadButtonStore,
} from "@/presentation/store/generic";
import { useUserLoginStore } from "@/presentation/store/security/loginStore";
import { toastInvoker } from "@repo/ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { TError } from "../../../../../../packages/ui/src/utils/types";
import { GetByIdUser } from "@/application/use-cases/security/user/getByIdUser.use-case";

export function useListOptions() {
  const { data } = useUserLoginStore();
  const { preview, updatePreview } = useFileUploadButtonStore();
  const { imageData, updateData } = useDataImageStore();

  //   const [imagePreview, setImagePreview] = useState<string>("");
  //   const [nameDocument, setNameDocument] = useState<string>("");

  // MUTATION
  const mutationUpdate = useMutation({
    mutationKey: ["updateUserRequest"],
    mutationFn: async (request: UpdateUserRequest) =>
      await UpdateUser(data?.idUser || 0, request),
  });

  //QUERY
  const { data: dataGetByIdUser } = useQuery({
    queryKey: ["GetByIdUser", data?.idUser],
    queryFn: () =>
      data?.idUser !== undefined ? GetByIdUser(data?.idUser) : null,
    refetchOnWindowFocus: false,
  });

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event, 777);
    const file = event.target.files?.[0];

    if (file) {
      //   setNameDocument(file?.name);
      const objectUrl = URL.createObjectURL(file);
      updatePreview(objectUrl);

      const base64String = await convertToBase64(file);
      console.log(base64String, "💌💌");
      updateData({ nameDocument: file?.name, imagePreview: base64String });
    }
  };

  console.log("🥶🥶", dataGetByIdUser);
  const handleUpload = () => {
    mutationUpdate.mutate(
      {
        // idIdentificationType: dataGetByIdUser?.persons?.idIdentificationType,
        // documentNumber: dataGetByIdUser?.persons?.documentNumber,
        // firstName: dataGetByIdUser?.persons?.firstName,
        // middleName: dataGetByIdUser?.persons?.middleName,
        // firstLastName: dataGetByIdUser?.persons?.firstLastName,
        // middleLastName: dataGetByIdUser?.persons?.middleLastName,
        // email: dataGetByIdUser?.persons?.email,
        // phone: dataGetByIdUser?.persons?.phone,
        // userName: dataGetByIdUser?.userName,
        // idCargo: dataGetByIdUser?.persons?.idCargo,
        // idRol: dataGetByIdUser?.userRole?.[0]?.idRole,
        // idCompany: dataGetByIdUser?.persons?.companyPerson?.[0]?.idCompany,
        id: data?.idUser,
        userName: dataGetByIdUser?.userName,
        email: dataGetByIdUser?.persons?.email,
        upload: {
          base64: imageData?.imagePreview,
          folder: "images",
          type: "image",
          name: imageData?.nameDocument,
        },
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
  };

  const clearImage = () => {
    updatePreview("");
    updateData({ nameDocument: "", imagePreview: "" });
  };

  return {
    preview,
    clearImage,
    handleUpload,
    handleFileChange,
    imageData,
    updateData,
  };
}
