import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ImageDetailComponent } from './image-detail.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxImageZoomModule } from 'ngx-image-zoom';
@NgModule({
  declarations: [ImageDetailComponent],
  imports: [CommonModule, MatDialogModule, NgbModule, NgxImageZoomModule],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  exports: [ImageDetailComponent],
})
export class ImageDetailModule {}
