import {
  UploadRequest,
  UploadResponse,
} from "@/domain/interfaces/utilitaria/upload/upload.response";
import { generalAxios } from "@/infrastructure/dataSources/generalAxios.dataSource";

export class UploadRepository {
  /**
   * Post Upload
   * @param request - Upload is required
   * @returns Promise<UploadResponse>
   */
  static async Upload(request: UploadRequest): Promise<UploadResponse> {
    const response = await generalAxios().post<UploadResponse, UploadRequest>(
      "/upload",
      request
    );
    return response;
  }
}
