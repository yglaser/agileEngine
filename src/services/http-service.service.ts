import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DEFAULT_HEADERS } from '../constants/headers';
@Injectable()
export class HttpService {
  http: any;
  constructor(private httpClient: HttpClient) {}

  public get<T>(url: string, criteria?): Observable<T> {
    return this.httpClient.get<T>(url, {
      headers: DEFAULT_HEADERS,
      params: criteria,
    });
  }

  public post<T>(url: string, body: any, criteria?): Observable<T> {
    return this.httpClient.post<T>(url, JSON.stringify(body), {
      headers: DEFAULT_HEADERS,
      params: criteria,
    });
  }

  public put<T>(url: string, body: any, criteria?): Observable<T> {
    return this.httpClient.put<T>(url, JSON.stringify(body), {
      headers: DEFAULT_HEADERS,
      params: criteria,
    });
  }

  public delete<T>(url: string, criteria?): Observable<T> {
    return this.httpClient.delete<T>(url, {
      headers: DEFAULT_HEADERS,
      params: criteria,
    });
  }

  public getByAnotherEndPoint<T>(
    url,
    headers = DEFAULT_HEADERS,
    withCredentials = false,
    params?
  ): Observable<T> {
    return this.httpClient.get<T>(url, { headers, withCredentials, params });
  }
}
