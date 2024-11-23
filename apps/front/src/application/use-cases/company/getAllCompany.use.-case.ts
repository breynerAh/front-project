import { CompanyResponse } from "@/domain/interfaces/administration/company/companyApi";
import { GetAllCompanyApiRepository } from "@/infrastructure/repositories/administration/company/companyApi.resposotory";

export async function GetAllCompany(): Promise<CompanyResponse[]> {
  const response = (await GetAllCompanyApiRepository.getAllCompany())?.map(
    (x) => ({
      ...x,
      state: x.idState === 1 ? "Activo" : "Inactivo",
    })
  );

  return response;
}
