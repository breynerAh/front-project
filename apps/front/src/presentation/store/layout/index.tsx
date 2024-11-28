import { create } from "zustand";
import { LayoutStore } from "./types.d";

export const useLayoutStore = create<LayoutStore>((set) => ({
  media: false,
  updateMedia: (media) => set(() => ({ media })),
}));
