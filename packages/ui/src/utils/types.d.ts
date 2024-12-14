export type TError = {
  response: {
    data: {
      message: string;
      name: string;
      stack: string;
    };
  };
};
