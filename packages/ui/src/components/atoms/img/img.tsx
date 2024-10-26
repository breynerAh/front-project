import React, { forwardRef } from "react";

export const ImageUI = forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>((props, ref) => {
  return <img {...props} ref={ref} />;
});
