import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LoginStore } from "./types";

export const useLoginStore = create(
  persist<LoginStore>(
    (set) => ({
      token: "",
      setToken: (token: string | undefined) => set({ token }),
    }),
    {
      name: "LoginTK",
      getStorage: () => localStorage,
      deserialize: (str) => JSON.parse(str),
    }
  )
);
