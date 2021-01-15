export interface PhotoGrid {
  hasMore: boolean;
  page: number;
  pageCount: number;
  pictures: any[];
}

export interface Auth {
  auth: boolean;
  token: string;
}

export interface Photo {
  author: string;
  camera: string;
  cropped_picture: string;
  full_picture: string;
  id: string;
  tags: string;
}
