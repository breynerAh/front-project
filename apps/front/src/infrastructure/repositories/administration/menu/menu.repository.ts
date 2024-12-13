import { ModuleResponse } from "@/domain/interfaces/administration/menu/module";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

export class GetMenuApiRepository {
  static async getMenu(): Promise<ModuleResponse[]> {
    const response = await generalAxios().get<ModuleResponse[]>("/modulos");
    return response;
  }
}
