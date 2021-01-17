import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {
  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public getItem(key: string): string {
    return localStorage.getItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }
}
