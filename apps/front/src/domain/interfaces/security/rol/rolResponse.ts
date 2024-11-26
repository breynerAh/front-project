export interface RolRequest {
  name: string;
  description: string;
  state: string;
}

export interface RolResponse {
  id: number;
  name: string;
  description: string;
  state: string;
}
