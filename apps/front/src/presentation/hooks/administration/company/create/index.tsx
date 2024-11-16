import { useState } from "react";

export function useCompany() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log("el chamo");
    setOpen(true);
  };
  return { handleOpen, setOpen, open };
}
