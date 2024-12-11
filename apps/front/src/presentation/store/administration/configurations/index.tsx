import { create } from "zustand";

export const useConfigurationStore = create<{
  state: number;
  setState: (state: number) => void;
}>((set) => ({
  state: 1,
  setState: (x) => {
    set((state) => ({
      ...state,
      state: x,
    }));
  },
}));

interface array {
  id: number;
  tipoDocumento: string;
  documento: string;
  nombreCompleto: string;
  estado: string;
}

export const useTabConfigurationStore = create<{
  disabled: boolean;
  selectedRows: array[];
  setDisabled: (disabled: boolean) => void;
  setSelectedRows: (selectedRows: array[]) => void;
  setValues: (value: number | null) => void;
  values: number | null;
}>()((set) => ({
  disabled: true,
  setDisabled: (disabled) => {
    set((state) => ({
      ...state,
      disabled: disabled,
    }));
  },

  selectedRows: [],
  setSelectedRows: (selectedRows) => {
    set((state) => ({
      ...state,
      selectedRows,
    }));
  },
  values: 0,
  setValues: (values) => {
    set((state) => ({
      ...state,
      values,
    }));
  },
}));
