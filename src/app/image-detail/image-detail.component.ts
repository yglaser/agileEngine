import { animate, style, transition, trigger } from '@angular/animations';

import {
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { KEY_CODE } from 'src/constants/keyEnum';
import { DataModal, Picture, PictureDetail } from 'src/models/images';
import { ImageService } from 'src/services/image-service.service';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/services/toast-service.service';
@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ImageDetailComponent implements OnInit, OnDestroy {
  public indexImage = 0;
  public showNavigationArrows = true;
  public showNavigationIndicators = false;
  public images: PictureDetail[] = [];
  public imageToShow: number;
  public indexSelected = 0;
  public id: string;
  public loading = false;
  public imagesMin: Picture[] = [];
  public indexToShow = 0;
  public actualImage: PictureDetail = null;
  public imagesCarrousel: PictureDetail[] = [];
  public arraySuscriptions: Subscription[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DataModal,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ImageDetailComponent>,
    private imageService: ImageService,
    private toastService: ToastService
  ) {
    this.imagesMin = this.data.imagesMin;
    this.indexSelected = data.index;
    this.id = data.imagesMin[this.indexSelected].id;
    this.goToDetailsByDireccion(true);
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === KEY_CODE.KEY_ESC) {
      this.dialogRef.close();
    }
    if (event.key === KEY_CODE.RIGHT_ARROW) {
      this.goToNext(this.indexSelected);
    }

    if (event.key === KEY_CODE.LEFT_ARROW) {
      this.goToPrev(this.indexSelected, this.indexToShow);
    }
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event) {
    console.log(event);
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    if (this.arraySuscriptions) {
      this.arraySuscriptions.forEach((el) => el.unsubscribe());
    }
  }

  public goToDetailsByDireccion(isNext: boolean, position?: number): void {
    const index = this.imagesCarrousel.findIndex((el) => el.id === this.id);
    if (index === -1) {
      const susc = this.imageService
        .getPictureById(this.id)
        .subscribe((image: PictureDetail) => {
          const prevElement = position === 0 ? 0 : position - 1;
          image.idParentArray = this.indexSelected;
          if (isNext) {
            this.imagesCarrousel.push(image);
            this.indexToShow = this.imagesCarrousel.length - 1;
          } else {
            console.log(prevElement, image);
            this.imagesCarrousel.splice(prevElement, 0, image);
            this.indexToShow = prevElement;
          }
        });
      this.arraySuscriptions.push(susc);
    } else {
      this.indexToShow = index;
    }
  }

  public goToNext(i: number): void {
    this.indexSelected = i === this.data.imagesMin.length - 1 ? i : i + 1;
    this.id = this.data.imagesMin[this.indexSelected].id;
    this.goToDetailsByDireccion(true);
  }

  public goToPrev(i: number, position: number): void {
    this.indexSelected = i === 0 ? 0 : i - 1;
    this.id = this.data.imagesMin[this.indexSelected].id;
    this.goToDetailsByDireccion(false, position);
  }

  public copyText(url: string): void {
    navigator.clipboard
      .writeText(url)
      .then((el) => {
        this.toastService.success('Copy', 'Link copied succesful');
      })
      .catch((e) => {
        this.toastService.error('Copy', 'System error, try later'),
          console.error(e);
      });
  }
}
