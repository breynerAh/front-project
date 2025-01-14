import { create } from "zustand";
export const useGenericStore = create<{
  hoveredRow: string | null;
  setHoveredRow: (id: string | null) => void;
}>()((set) => ({
  hoveredRow: null,
  setHoveredRow: (hoveredRow) => {
    set((state) => ({
      ...state,
      hoveredRow,
    }));
  },
}));

export const useDisabledFormStore = create<{
  disabled: boolean;
  setDisabled: (disabled: boolean) => void;
}>()((set) => ({
  disabled: true,
  setDisabled: (disabled) => {
    set((state) => ({
      ...state,
      disabled: disabled,
    }));
  },
}));

export const useOpenStore = create<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>()((set) => ({
  open: false,
  setOpen: (open) => {
    set((state) => ({
      ...state,
      open: open,
    }));
  },
}));

export const useIdStore = create<{
  id: number;
  setId: (id: number) => void;
}>()((set) => ({
  id: 0,
  setId: (id) => {
    set((state) => ({
      ...state,
      id: id,
    }));
  },
}));

export const useFileUploadButtonStore = create<{
  preview: string;
  updatePreview: (preview: string) => void;
}>()((set) => ({
  preview: "",
  updatePreview: (preview) => {
    set((state) => ({
      ...state,
      preview: preview,
    }));
  },
}));

export const useDataImageStore = create<{
  imageData: { nameDocument: string; imagePreview: string };
  updateData: (imageData: {
    nameDocument: string;
    imagePreview: string;
  }) => void;
}>()((set) => ({
  imageData: { nameDocument: "", imagePreview: "" },
  updateData: (imageData) => {
    set((state) => ({
      ...state,
      imageData: imageData,
    }));
  },
}));
