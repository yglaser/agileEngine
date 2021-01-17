import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { AuthenticationService } from './login-service.service';
import { ToastService } from './toast-service.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorsHandlerService implements ErrorHandler {
  constructor(private injector: Injector) {}
  handleError(error: Error | HttpErrorResponse): void {
    if (error instanceof HttpErrorResponse) {
      const httpErrorCode = error.status;
      switch (httpErrorCode) {
        case 401:
          this.showError(
            'You dont have permision to enter',
            'Authentication Error'
          );

          break;
        case 403:
          this.showError(
            'Su sesion ha sido cerrada.',
            'Error de Autentificacion.'
          );
          // this.router().navigate(['/logout']);
          break;
        case 404:
          this.showError(
            'No hay resultados para esta busqueda.',
            'No hay datos.'
          );
          break;
        case 418:
          this.showError(
            'No tiene permisos para utilizar la aplicación,Contacte al Administrador.',
            'Error de permisos'
          );
          break;
        case 501:
          this.showError(error.error.messages[0], 'ERROR DE SESION');
          setTimeout(() => {
            window.location.href = error.error.redirectUrl;
          }, 7000);
          break;
        case 409:
          let messageError = error.error.messages
            .map((element, index) => {
              return element;
            })
            .join(',');
          messageError = messageError
            ? messageError
            : 'Ha ocurrido un error en el procesamiento de los datos';
          this.showError(messageError, 'Error de validación.');
          break;
        default:
          this.showError('Ha ocurrido un error, intente nuevamente');
      }
    } else {
      console.error(error);
    }
  }
  private showError(message: string, error = 'Error'): void {
    const toastr = this.injector.get(ToastService);
    toastr.error(message, error);
  }

  private authService(): AuthenticationService {
    return this.injector.get(AuthenticationService);
  }

  private router(): Router {
    return this.injector.get(Router);
  }
}
