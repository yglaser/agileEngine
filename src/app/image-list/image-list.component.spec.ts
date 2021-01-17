import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { environment } from 'src/environments/environment';
import { CoremodulelibModule } from 'src/services/coremodulelib.module';
import { InterceptorService } from 'src/services/interceptor.service';
import { ImageDetailModule } from '../image-detail/image-detail.module';

import { ImageListComponent } from './image-list.component';

describe('ImageListComponent', () => {
  let component: ImageListComponent;
  let fixture: ComponentFixture<ImageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    })
      .overrideModule(BrowserDynamicTestingModule, {
        set: {
          entryComponents: [ImageListComponent],
        },
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
