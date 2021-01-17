import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Login, LoginResponse } from 'src/models/login';
import { DEFAULT_HEADERS, TOKEN_APP } from '../constants/headers';
import { ApiEndpoint } from './api-endpoint';
import { HttpService } from './http-service.service';
import { LocalstorageService } from './localstorage.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private http: HttpService,
    private localStorageService: LocalstorageService,
    private apiEndpoint: ApiEndpoint
  ) {}

  public login(loginData: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiEndpoint.LOGIN, loginData);
  }

  public getToken(): string {
    return this.localStorageService.getItem(TOKEN_APP);
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }

  public saveResLoginData(loginResponse: any): void {
    this.localStorageService.setItem(TOKEN_APP, loginResponse.token);
  }
}
