import { ModuleResponse } from "@/domain/interfaces/administration/menu/module";
import { GetMenuApiRepository } from "@/infrastructure/repositories/administration/menu/menu.repository";

export async function getMenu(): Promise<ModuleResponse[]> {
  const response = await GetMenuApiRepository.getMenu();
  return response;
}
