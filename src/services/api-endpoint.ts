import { Injectable, Inject, InjectionToken } from '@angular/core';

export const ApiEndpointBaseUrl = new InjectionToken<string>(
  'ApiEndpointBaseUrl'
);

@Injectable()
export class ApiEndpoint {
  private env: string;

  constructor(@Inject(ApiEndpointBaseUrl) private baseUrl) {
    this.env = baseUrl;
  }

  public get LOGIN() {
    return `${this.env}/auth`;
  }

  public get PICTURE() {
    return `${this.env}/images`;
  }
}
