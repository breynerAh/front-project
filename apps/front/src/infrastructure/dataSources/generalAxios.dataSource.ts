import { AxiosAdapter } from "@/infrastructure/adapters/http/axios.adapter";
import { selectBackendEnvironment } from "@/presentation/shared/utils";

export const generalAxios = () => {
  return new AxiosAdapter({
    baseURL: selectBackendEnvironment() || "http://localhost:3001/api",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${
        JSON?.parse(localStorage?.getItem("LoginTK") || "")?.state?.token
      }`,
    },
  });
};
