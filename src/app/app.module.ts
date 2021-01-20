import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { environment } from 'src/environments/environment';
import { CoremodulelibModule } from 'src/services/coremodulelib.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from 'src/services/interceptor.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageListModule } from './image-list/image-list.module';
import { ImageDetailModule } from './image-detail/image-detail.module';
@NgModule({
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
    MatCardModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
