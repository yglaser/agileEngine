import { HttpHeaders } from '@angular/common/http';
export const DEFAULT_HEADERS = new HttpHeaders({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});
export const TOKEN_HEADER = 'Authorization';
export const TOKEN_APP = 'token';
export const APP_HEADER = 'x-app';
