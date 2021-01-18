import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { OverlayContainer } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { CoremodulelibModule } from 'src/services/coremodulelib.module';
import { InterceptorService } from 'src/services/interceptor.service';

import { ImageDetailComponent } from './image-detail.component';

describe('ImageDetailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageDetailComponent],
      imports: [
        CommonModule,
        MatDialogModule,
        CoremodulelibModule.forRoot(environment.API),
        NgxImageZoomModule,
        NgbModule,
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
    }).compileComponents();
  }));

  /*
  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it("onModalCancel", () => {
      expect(component.ImageDetailComponent).toBeDefined();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
