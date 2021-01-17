import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
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
  @Output() idToFind: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DataModal,
    config: NgbCarouselConfig,
    private imageService: ImageService
  ) {
    /*
    this.indexImage = data.indexParent;
    console.log(this.data, this.data.idDetail)
    this.getImageDetailsById(this.data.idDetail, this.data.indexParent);
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;*/
  }
  ngOnInit() {}
  /*
  public goToNextImage(parentId) {
    this.showNavigationArrows = !this.showNavigationArrows;
    if (parentId === this.data.picturesMin.length - 1) {
      this.indexImage = parentId++;
      if (
        this.images.findIndex((el) => el.idParentArray === this.indexImage) ===
        -1
      ) {
        const idToFind = this.data.picturesMin[this.indexImage].id;
        this.getImageDetailsById(idToFind, parentId);
      }
    }
  }

  public getImageDetailsById(id: string, idParent: number): void {
    console.log(id)
    if (this.images.findIndex((el) => el.id === id) === -1) {
      this.imageService.getPictureById(id).subscribe((el: PictureDetail) => {
        el.idParentArray = idParent;
        this.images.push(el);
      });
    }
    this.images.sort((a, b) => {
      return a.idParentArray - b.idParentArray;
    });
  }
  */
}
