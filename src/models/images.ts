export interface Pictures {
  pictures: Picture[];
  page: number;
  pageCount: number;
  hasMore: boolean;
}

export interface Picture {
  id: string;
  cropped_picture: string;
}

export interface DataModal {
  // picturesMin: Picture[],
  // idDetail: string,
  // maxImages: number,
  // indexParent: number,
  image: PictureDetail;
}

export interface PictureDetail {
  id: string;
  author: string;
  camera: string;
  tags: string;
  cropped_picture: string;
  full_picture: string;
  idParentArray?: number;
}
