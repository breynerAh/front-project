import { MenuResponse } from "@/domain/interfaces/administration/menu/menu";

export interface SubModuleResponse {
  id: number;
  name: string;
  description: string;
  menu: MenuResponse[];
}
