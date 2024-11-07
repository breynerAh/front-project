export type selectCompanyStore = {
  newToken: string | null;
  updateNewToken: (id: string | undefined) => void;
  clearNewToken: () => void;
};
