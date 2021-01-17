import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class ToastService {
  constructor(private toastr: ToastrService) {}

  public success(message: string, title: string): void {
    this.toastr.success(message, title);
  }
  public error(message: string, title: string): void {
    this.toastr.error(message, title);
  }
  public warn(message: string, title: string): void {
    this.toastr.warning(message, title);
  }
  public notify(message: string, title: string): void {
    this.toastr.info(message, title);
  }

  public clearToast(): void {
    setTimeout(() => {
      this.toastr.clear();
    }, 1000);
  }
}
