import { Backdrop, Fade, IconButton, Modal, ModalProps } from "@mui/material";
import { BoxUI } from "../box/box";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { ThemeColor } from "../../../../../../apps/front/src/presentation/providers/theme/theme";
import { TypographyUI } from "../typography/typography";
import CloseIcon from "@mui/icons-material/Close";
import { SvgIconComponent } from "@mui/icons-material";

interface ModalUIProps extends ModalProps {
  variant?: "sm" | "md" | "lg" | "xl";
  width?: string | number;
  height?: string | number;
  bgcolor?: string;
}

export type TModal = {
  state: boolean;
  title?: string;
  children: ReactNode;
  width?: string;
  minHeight?: string;
  minWidth?: string;
  height?: string;
  componentTitle?: ReactNode;
  overflow?: string;
  paddingModal?: string;
  marginIcon?: string;
  marginTitle?: string;
  Border?: number | "none";
  borderRadius?: number | "none";
  handleCloseModal: (value: boolean) => void;
  iconoTituloModal: SvgIconComponent;
};

export const ModalUI = React.forwardRef<HTMLDivElement, ModalUIProps>(
  ({ height = "auto", bgcolor = "#fff", width, ...props }, ref) => {
    return (
      <Modal ref={ref} {...props}>
        <BoxUI
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {
              xs: "90%",
              sm: "100%",
              md: "70%",
              lg: width,
              xl: width || "41%",
            },
            height,
            bgcolor,
            borderRadius: "5px",
          }}
        >
          {props.children}
        </BoxUI>
      </Modal>
    );
  }
);

export const TransitionsModalUI: React.FC<TModal> = ({
  state = false,
  title = "",
  children,
  width = 400,
  minHeight = 64,
  minWidth = 64,
  height = 400,
  overflow,
  paddingModal: p = "20px",
  marginIcon,
  marginTitle,
  handleCloseModal,
  componentTitle,
  iconoTituloModal: IconTitle,
}) => {
  const theme = ThemeColor();
  const [open, setOpen] = useState(state);

  const hide = useCallback(() => {
    if (open && state) handleCloseModal(false);
  }, [handleCloseModal, open, state]);

  useEffect(() => {
    setOpen(state);
  }, [state]);

  const styles = {
    title: {
      fontWeight: 500,
      fontSize: "16px",
      fontFamily: "Poppins",
      textAlign: "left",
    },
    modal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "background.paper",
      borderRadius: "5px",
      p,
      border: "none",
      outline: "none",
      padding: "0px",
    },
    header: {
      width: "100%",
      height: "auto",
      display: "flex",
      marginBottom: "10px",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 20px 0px 20px",
    },
    body: {
      width: "100%",
      height: "auto",
      borderTop: `1px ${theme.system.hover} solid`,
      padding: "20px",
    },
    iconButton: {
      color: "gray",
      padding: 0,
      ":hover": {
        color: "red",
      },
    },
  };

  return (
    <ModalUI
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      width={width}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <BoxUI
          sx={{
            ...styles.modal,
            width,
            height,
            minWidth,
            minHeight,
            p,
          }}
        >
          <BoxUI sx={styles.header}>
            <BoxUI
              display="flex"
              alignItems="center"
              sx={{ margin: marginTitle }}
              {...(componentTitle && { gap: "20px" })}
            >
              {title ? (
                <BoxUI
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: theme.text.principal,
                  }}
                >
                  <IconTitle sx={{ marginRight: "10px" }} />
                  <TypographyUI sx={styles.title}>{title}</TypographyUI>
                </BoxUI>
              ) : null}
              {componentTitle ? componentTitle : null}
            </BoxUI>
            <IconButton
              onClick={hide}
              sx={{ ...styles.iconButton, margin: marginIcon }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </BoxUI>
          <BoxUI sx={{ ...styles.body, overflow }}>{children}</BoxUI>
        </BoxUI>
      </Fade>
    </ModalUI>
  );
};
