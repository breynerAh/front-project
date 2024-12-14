import useUpload from "@/presentation/hooks/upload";
import { TextField } from "@mui/material";
import { BoxUI, ButtonUI, TransitionsModalUI } from "@repo/ui";
import { useState } from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
export default function UploadContainer() {
  const { handleFileChange, handleUpload } = useUpload();
  const [open, setOpen] = useState<boolean | undefined>(undefined);

  const handleOpen = () => {
    setOpen(true);
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      <BoxUI
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <TextField
          id="file-input"
          type="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleFileChange(e)
          }
        />
        <ButtonUI
          onClick={() => handleUpload()}
          sx={{
            width: "auto",
            height: "40px",
            background: "black",
            color: "white",
            marginLeft: "20px",
            ":hover": { background: "#1b1919" },
          }}
        >
          enviar
        </ButtonUI>
      </BoxUI>

      <BoxUI sx={{ margin: "10px 0px" }}>
        <ButtonUI
          onClick={() => handleOpen()}
          sx={{
            width: "auto",
            height: "40px",
            background: "black",
            color: "white",
            ":hover": { background: "#1b1919" },
          }}
        >
          Abrir documento
        </ButtonUI>

        <TransitionsModalUI
          state={open}
          title={"Document"}
          iconoTituloModal={DescriptionIcon}
          handleCloseModal={() => setOpen(false)}
          width="70vw"
          minWidth="300px"
          height="95vh"
          overflow="auto"
        >
          <BoxUI sx={{ height: "85vh", overflow: "auto" }}>
            <Viewer
              fileUrl="https://res.cloudinary.com/ariscloud/raw/upload/v1734187909/documents/cn0noyejzmkftjqzjmmc"
              plugins={[defaultLayoutPluginInstance]}
            />
          </BoxUI>
        </TransitionsModalUI>
      </BoxUI>

      <div>
        <video
          src="https://res.cloudinary.com/ariscloud/video/upload/v1734040760/videos/pmav0jfcztnsouwt7myi.mp4"
          width="500"
          height="640"
          controls
        ></video>
      </div>
    </div>
  );
}
