import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxImageGalleryModule } from 'ngx-image-gallery';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { EventJumbotronComponent } from './events/event-jumbotron.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { PhotosComponent } from './photos/photos.component';
import { EventService } from './services/event.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    EventComponent,
    EventThumbnailComponent,
    EventJumbotronComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxImageGalleryModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule {}
