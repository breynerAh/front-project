import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LoginStore } from "./types";

export const useLoginStore = create(
  persist<LoginStore>(
    (set) => ({
      token: "",
      id: 0,
      setToken: (token: string | undefined) => set({ token }),
    }),
    {
      name: "LoginTK",
      getStorage: () => localStorage,
      deserialize: (str) => JSON.parse(str),
    }
  )
);

export const useUserLoginStore = create(
  persist<{
    idUser: number;
    setUser: (idUser: number) => void;
  }>(
    (set) => ({
      idUser: 0,
      setUser: (idUser: number) => set({ idUser }),
    }),
    {
      name: "user",
      getStorage: () => localStorage,
      deserialize: (str) => JSON.parse(str),
    }
  )
);
