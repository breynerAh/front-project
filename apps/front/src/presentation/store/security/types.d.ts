export interface LoginStore {
  token: string | null;
  setToken: (token: string | undefined) => void;
}
