import { create } from "zustand";
import { UserStore } from "./types.d";

export const useUserStore = create<UserStore>((set) => ({
  userId: undefined,
  updateUserId: (userId) => set(() => ({ userId })),
}));
