import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeEs from '@angular/common/locales/es';
import { ErrorHandler, NgModule, ModuleWithProviders } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { ApiEndpoint, ApiEndpointBaseUrl } from './api-endpoint';
import { ErrorsHandlerService } from './errors-handler.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { HttpService } from './http-service.service';
import { ImageService } from './image-service.service';
import { LocalstorageService } from './localstorage.service';
import { AuthenticationService } from './login-service.service';

import { ToastService } from './toast-service.service';
registerLocaleData(localeEs, 'es');
@NgModule({
  imports: [
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 7000,
      preventDuplicates: true,
      progressBar: true,
      closeButton: true,
      tapToDismiss: false,
    }),
  ],
})
export class CoremodulelibModule {
  static forRoot(baseUrl: string): ModuleWithProviders<CoremodulelibModule> {
    return {
      ngModule: CoremodulelibModule,
      providers: [
        HttpService,
        AuthenticationService,
        AuthGuardService,
        LocalstorageService,
        ImageService,
        ToastService,

        ApiEndpoint,
        {
          provide: ApiEndpointBaseUrl,
          useValue: baseUrl,
        },
        { provide: ErrorHandler, useClass: ErrorsHandlerService },
      ],
    };
  }
}
