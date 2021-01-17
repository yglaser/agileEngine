import {
  Component,
  EventEmitter,
  HostListener,
  Inject,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  NgbCarouselConfig,
  NgbSlideEvent,
  NgbSlideEventDirection,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { KEY_CODE } from 'src/constants/keyEnum';
import { DataModal, PictureDetail } from 'src/models/images';
import { ImageService } from 'src/services/image-service.service';
@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss'],
  providers: [NgbCarouselConfig],
})
export class ImageDetailComponent implements OnInit {
  public indexImage = 0;
  showNavigationArrows = true;
  showNavigationIndicators = false;
  public images: PictureDetail[] = [];
  public imageToShow: number;
  public indexSelected = 0;
  public id: string;
  public loading = false;
  @Output() idToFind: EventEmitter<string> = new EventEmitter<string>();
  imagesCarrousel: PictureDetail[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DataModal,
    config: NgbCarouselConfig,
    private imageService: ImageService
  ) {
    this.indexSelected = data.index;
    this.id = data.imagesMin[this.indexSelected].id;
    this.goToDetails();
    config.keyboard = true;
    config.wrap = false;
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === KEY_CODE.RIGHT_ARROW) {
      this.onRight();
    }

    if (event.key === KEY_CODE.LEFT_ARROW) {
      this.onLeft();
    }
  }

  public clicked($Event) {
    console.log($Event);
  }
  ngOnInit() {}
  public onLeft(): void {
    this.indexSelected = this.indexSelected === 0 ? 0 : this.indexSelected - 1;
    this.id = this.data.imagesMin[this.indexSelected].id;
    this.goToDetails();
  }

  public onRight(): void {
    this.indexSelected = this.indexSelected + 1;
    this.id = this.data.imagesMin[this.indexSelected].id;
    this.goToDetails();
  }

  public onSlide(slideEvent: NgbSlideEvent) {
    console.log(slideEvent);
    if (slideEvent.direction === NgbSlideEventDirection.LEFT) {
      this.onLeft();
    }
    if (slideEvent.direction === NgbSlideEventDirection.RIGHT) {
      this.onRight();
    }
  }
  public goToDetails() {
    this.loading = true;
    if (this.imagesCarrousel.findIndex((el) => el.id === this.id) === -1) {
      this.imageService
        .getPictureById(this.id)
        .subscribe((image: PictureDetail) => {
          image.idParentArray = this.indexSelected;
          this.imagesCarrousel.push(image);
        });
    }
  }
}
