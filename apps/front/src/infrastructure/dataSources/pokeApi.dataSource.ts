import { AxiosAdapter } from "@/infrastructure/adapters/http/axios.adapter";

export const pokeApi = new AxiosAdapter({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    "Content-Type": "application/json",
  },
});