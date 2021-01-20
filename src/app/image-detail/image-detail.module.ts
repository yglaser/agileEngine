import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ImageDetailComponent } from './image-detail.component';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ImageDetailComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    NgbModule,
    BrowserAnimationsModule,
    BrowserModule,
    NoopAnimationsModule,
    PinchZoomModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  exports: [ImageDetailComponent],
})
export class ImageDetailModule {}
