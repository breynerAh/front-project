export interface UploadRequest {
  folder: "images" | "videos" | "documents";
  type: "auto" | "image" | "video" | "raw"; // raw = type of document pdf
  base64: string;
  name: string;
}

export interface UploadResponse {
  message: string;
  url: string;
}
