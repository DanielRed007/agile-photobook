import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { PhotoViewComponent } from './components/photo-view/photo-view.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardComponent } from './components/grid/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    PhotoViewComponent,
    HeaderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
