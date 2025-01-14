export type FileUploadActionProps = {
  width?: string;
  height?: string;
  text: string;
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  };
  name: string;
  disabledForm?: boolean;
  imageRequired?: boolean;
};
