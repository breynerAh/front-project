export async function CreateCompany(
  request: CreateCompanyRequest
): Promise<CreateCompanyResponse> {
  const response = await CreateCompanyApiRepository.CreateCompany(request);
  return response;
}
