import {
  Component,
  EventEmitter,
  HostListener,
  Inject,
  OnInit,
  Output,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  NgbCarouselConfig,
  NgbSlideEvent,
  NgbSlideEventDirection,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { KEY_CODE } from 'src/constants/keyEnum';
import { DataModal, Picture, PictureDetail } from 'src/models/images';
import { ImageService } from 'src/services/image-service.service';
@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss'],
  providers: [NgbCarouselConfig],
})
export class ImageDetailComponent implements OnInit {
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
  @Output() idToFind: EventEmitter<string> = new EventEmitter<string>();
  imagesCarrousel: PictureDetail[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DataModal,
    config: NgbCarouselConfig,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ImageDetailComponent>,
    private imageService: ImageService
  ) {
    this.imagesMin = this.data.imagesMin;
    this.indexSelected = data.index;
    this.id = data.imagesMin[this.indexSelected].id;

    this.goToDetails(this.id);
    config.keyboard = true;
    config.wrap = false;
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === KEY_CODE.KEY_ESC) {
      this.dialogRef.close();
    }
  }

  ngOnInit() {}

  public goToDetails(id) {
    this.imageService.getPictureById(id).subscribe((image: PictureDetail) => {
      this.actualImage = image;
    });
  }

  public onSlide($event: NgbSlideEvent, caro) {
    this.actualImage = null;
    console.log($event);
    if ($event.direction === NgbSlideEventDirection.LEFT) {
      console.log(this.indexSelected, this.data.imagesMin.length - 1);
      this.indexSelected =
        this.indexSelected === this.data.imagesMin.length - 1
          ? this.indexSelected
          : this.indexSelected + 1;
    } else {
      this.indexSelected =
        this.indexSelected === 0 ? 0 : this.indexSelected - 1;
    }
  }
}
