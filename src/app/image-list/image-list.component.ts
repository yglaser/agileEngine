import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Picture, PictureDetail } from 'src/models/images';
import { MatDialog } from '@angular/material/dialog';
import { ImageDetailComponent } from '../image-detail/image-detail.component';
import { ImageService } from 'src/services/image-service.service';
import { KEY_CODE } from 'src/constants/keyEnum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class ImageListComponent implements OnInit, OnDestroy {
  @Input() loading: boolean;
  @Input() images: Picture[] = [];
  @Input() hasMore: boolean;
  @Output() hasToScroll: EventEmitter<boolean> = new EventEmitter<boolean>();
  public id: string;
  public pictureDetail: PictureDetail[] = [];
  public modalIsOpen: boolean;
  public arraySucriptions: Subscription[] = [];
  public indexSelected = 0;
  constructor(public dialog: MatDialog, private imageService: ImageService) {}

  ngOnDestroy(): void {
    if (this.arraySucriptions) {
      this.arraySucriptions.forEach((el) => el.unsubscribe());
    }
  }
  ngOnInit() {}
  public onScroll() {
    this.hasToScroll.emit(true);
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === KEY_CODE.RIGHT_ARROW) {
      if (!this.modalIsOpen) {
        this.onRight();
      }
    }

    if (event.key === KEY_CODE.LEFT_ARROW) {
      if (!this.modalIsOpen) {
        this.onLeft();
      }
    }

    if (event.key === KEY_CODE.KEY_ENTER) {
      if (!this.modalIsOpen) {
        this.goToDetails(this.id, this.indexSelected);
      }
    }
  }

  public onLeft(): void {
    this.indexSelected = this.indexSelected === 0 ? 0 : this.indexSelected - 1;
    this.id = this.images[this.indexSelected].cropped_picture;
  }

  public onRight(): void {
    this.indexSelected = this.indexSelected + 1;
    this.id = this.images[this.indexSelected].id;
  }
  public goToDetails(id, i) {
    this.indexSelected = i;
    const dialog = this.dialog.open(ImageDetailComponent, {
      panelClass: 'custom-dialog-container',
      disableClose: true,
      hasBackdrop: false,

      data: {
        index: this.indexSelected,
        imagesMin: this.images,
      },
    });
    const susc = dialog
      .afterOpened()
      .subscribe((el) => (this.modalIsOpen = true));
    const susc1 = dialog
      .afterClosed()
      .subscribe((el) => (this.modalIsOpen = false));
    this.arraySucriptions.push(...[susc, susc1]);
  }
}
