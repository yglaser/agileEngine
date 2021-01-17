import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { MatCardModule, MatTabsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { environment } from 'src/environments/environment';
import { CoremodulelibModule } from 'src/services/coremodulelib.module';
import { InterceptorService } from 'src/services/interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageDetailModule } from './image-detail/image-detail.module';
import { ImageListModule } from './image-list/image-list.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        InfiniteScrollModule,
        MatCardModule,
        MatTabsModule,
        CoremodulelibModule.forRoot(environment.API),
        ImageListModule,
        ImageDetailModule,
      ],

      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true,
        },
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'agileTest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('agileTest');
  });
});
