export interface Login {
  apiKey: string;
}

export interface LoginResponse {
  auth: boolean;
  token: string;
}

export interface Alert {
  type: string;
  message: string;
}
