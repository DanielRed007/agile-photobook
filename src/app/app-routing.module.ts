import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { PhotoViewComponent } from './components/photo-view/photo-view.component';

const routes: Routes = [
  { path: '', component: GridComponent },
  { path: 'photo/:id', component: PhotoViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
