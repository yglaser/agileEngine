import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PictureDetail, Pictures } from 'src/models/images';

import { ApiEndpoint } from './api-endpoint';
import { HttpService } from './http-service.service';

@Injectable()
export class ImageService {
  constructor(
    private generalService: HttpService,
    private apiEndpoint: ApiEndpoint
  ) {}

  public getPictureById(id: string): Observable<PictureDetail> {
    return this.generalService.get<PictureDetail>(
      this.apiEndpoint.PICTURE + '/' + id
    );
  }

  public getAllPictures(page: number = 1): Observable<Pictures> {
    return this.generalService.get<Pictures>(this.apiEndpoint.PICTURE, {
      page,
    });
  }
}
