import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Picture, PictureDetail, Pictures } from 'src/models/images';
import { Login, LoginResponse } from 'src/models/login';
import { ImageService } from 'src/services/image-service.service';
import { AuthenticationService } from 'src/services/login-service.service';
import { ToastService } from 'src/services/toast-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public loading: boolean;
  public images: Picture[] = [];
  public actualPage = 1;
  public morePages = true;
  public totalPage: number;
  public title = 'agileTest';
  constructor(
    private authService: AuthenticationService,
    private toastService: ToastService,
    private imageService: ImageService
  ) {}
  ngOnInit(): void {
    this.login();
    if (this.authService.isLoggedIn) {
      this.getAllImages(this.actualPage);
    }
  }

  public getAllImages(currentPage: number): void {
    console.log('hola');
    this.loading = true;

    this.imageService.getAllPictures(currentPage).subscribe(
      (res: Pictures) => {
        this.loading = false;
        this.images.push(...res.pictures);
        this.morePages = res.hasMore;
        this.totalPage = res.pageCount;
      },
      (err) => {
        this.login();
      }
    );
  }
  public login(): void {
    this.loading = true;
    let observable: Observable<LoginResponse>;
    const loginData: Login = { apiKey: '23567b218376f79d9415' };
    observable = this.authService.login(loginData);
    observable.subscribe(
      (response: LoginResponse) => {
        this.authService.saveResLoginData(response);

        this.getAllImages(this.actualPage);
      },
      (err) => {
        console.log(err);

        this.toastService.error(err.error.messages[0], 'Login Error');
        this.loading = false;
      }
    );
  }

  public onScroll(): void {
    if (
      this.morePages &&
      this.authService.isLoggedIn() &&
      this.actualPage < this.totalPage
    ) {
      this.actualPage++;
      this.getAllImages(this.actualPage);
    }
  }

  public getImageDetails(id: string) {
    this.imageService.getPictureById(id).subscribe((res: PictureDetail) => {
      console.log(res);
    });
  }
}
