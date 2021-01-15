import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/interface/interfaces';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.scss'],
})
export class PhotoViewComponent implements OnInit {
  photoData = {};

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto() {
    this.route.params.subscribe((params) => {
      this.photoService
        .getPhotoById(params.id)
        .subscribe((response: Photo[]) => {
          this.photoData = response;
        });
    });
  }
}
