import {
  UploadRequest,
  UploadResponse,
} from "@/domain/interfaces/utilitaria/upload/upload.response";
import { UploadRepository } from "@/infrastructure/repositories/utilitaria/upload/upload.repository";

/**
 * User
 * @returns Promise<UploadResponse>
 */
export async function Upload(request: UploadRequest): Promise<UploadResponse> {
  const response = await UploadRepository.Upload(request);
  return response;
}
