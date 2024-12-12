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

export const useUserLoginStore = create(
  persist<{
    data: {
      idUser: number;
      idRol: number;
    };
    setUser: (data: { idUser: number; idRol: number }) => void;
  }>(
    (set) => ({
      data: {
        idUser: 0,
        idRol: 0,
      },
      setUser: (data: { idUser: number; idRol: number }) => set({ data }),
    }),
    {
      name: "user",
      getStorage: () => localStorage,
      deserialize: (str) => JSON.parse(str),
    }
  )
);
