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
