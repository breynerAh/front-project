export interface UserStore {
  userId: number | undefined;
  updateUserId: (userId: State["userId"]) => void;
}
