export interface Login {
  apiKey: string;
}

export interface LoginResponse {
  auth: boolean;
  token: string;
}
