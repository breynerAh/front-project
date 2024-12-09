export interface LayoutStore {
  media: boolean;
  updateMedia: (media: State["media"]) => void;
}
