import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoGrid } from 'src/app/interface/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"],
})
export class GridComponent implements OnInit {
  public imageList = [];
  public totalItems: number = 10;
  public currentPage = 1;
  public page: number;

  constructor(private photoService: PhotoService, private router: Router) {}

  ngOnInit(): void {
    this.initGrid();
  }

  initGrid() {
    // Get page number

    this.photoService.getPhotoData().subscribe((res: PhotoGrid) => {
      this.imageList = res.pictures;
    });
  }

  getSingleCard($event): void {
    this.router.navigateByUrl(`/photo/${$event}`);
  }

  pageChanged(event: any): void {
    this.page = event.page;
    this.currentPage = event.page;
    this.photoService.getPhotoData(this.page).subscribe((res: PhotoGrid) => {
      this.imageList = res.pictures;
    });
  }
}
