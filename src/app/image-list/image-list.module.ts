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
import { ImageDetailComponent } from '../image-detail/image-detail.component';

@NgModule({
  declarations: [ImageListComponent],
  imports: [CommonModule, InfiniteScrollModule, ImageDetailModule],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  entryComponents: [ImageDetailComponent],
  exports: [ImageListComponent],
})
export class ImageListModule {}
