import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ImageDetailComponent } from './image-detail.component';
import { CoremodulelibModule } from 'src/services/coremodulelib.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InterceptorService } from 'src/services/interceptor.service';

@NgModule({
  declarations: [ImageDetailComponent],
  imports: [CommonModule, MatDialogModule, NgbModule],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  exports: [ImageDetailComponent],
})
export class ImageDetailModule {}
