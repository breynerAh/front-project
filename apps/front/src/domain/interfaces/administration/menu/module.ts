import { SubModuleResponse } from "@/domain/interfaces/administration/menu/subModule";

export interface ModuleResponse {
  id: number;
  name: string;
  description: string;
  subModules: SubModuleResponse[];
}
