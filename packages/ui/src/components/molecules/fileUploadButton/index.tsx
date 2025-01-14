import { Box, TextField, Typography } from "@mui/material";
import { useListOptions } from "../../../../../../apps/front/src/presentation/hooks/layout/listOptions";
import { ThemeColor } from "../../../../../../apps/front/src/presentation/providers/theme/theme";
import { ButtonUI } from "../../atoms/button/button";
import { FileUploadActionProps } from "./types";

export function FileUploadButtonUI(props: FileUploadActionProps) {
  const { width, height, text, icon, disabledForm } = props;
  // const { updatePreview } = useFileUploadButtonStore();
  const theme = ThemeColor();
  const { handleFileChange } = useListOptions();

  // const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];

  //   console.log(111, file);
  //   if (file) {
  //     // Si las validaciones pasan, actualizar la vista previa y el formulario
  //     const objectUrl = URL.createObjectURL(file);
  //     console.log(33333, objectUrl);
  //     updatePreview(objectUrl);
  //   }
  // };

  return (
    <Box>
      <TextField
        id="file-input"
        type="file"
        style={{ display: "none" }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleFileChange(e)
        }
      />
      <label htmlFor={!disabledForm ? "file-input" : ""}>
        <ButtonUI
          disabled={disabledForm}
          component="span"
          sx={{
            width: width ? width : "auto",
            height: height ? height : "30px",
            background: theme.secondary.main,
            color: "white",
            ":hover": {
              background: theme.secondary.dark,
            },
          }}
        >
          {icon}
          <Typography
            sx={{
              marginLeft: "5px",
              display: {
                xs: "none",
                sm: "block",
                fontSize: "14px",
                fontWeight: 500,
              },
            }}
          >
            {text}
          </Typography>
        </ButtonUI>
      </label>
    </Box>
  );
}
