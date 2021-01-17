import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageListComponent } from './image-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ImageDetailModule } from '../image-detail/image-detail.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { environment } from 'src/environments/environment';
import { CoremodulelibModule } from 'src/services/coremodulelib.module';
import { InterceptorService } from 'src/services/interceptor.service';

@NgModule({
  declarations: [ImageListComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    ImageDetailModule,
    CoremodulelibModule.forRoot(environment.API),
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  exports: [ImageListComponent],
})
export class ImageListModule {}
