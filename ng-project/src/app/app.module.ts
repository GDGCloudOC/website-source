import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AboutComponent } from "./about/about.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { LayoutComponent } from "./layout/layout.component";
import { MaterialModule } from "./material/material.module";
import { HeaderComponent } from "./navigation/header/header.component";
import { PhotoModalComponent } from "./photos/photo-modal/photo-modal.component";
import { PhotoComponent } from "./photos/photo/photo.component";
import { PhotosComponent } from "./photos/photos.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { EventJumbotronComponent } from "./events/event-jumbotron.component";
import { EventComponent } from "./events/events.component";
import { EventService } from "./services/event.service";
import { SidenavListComponent } from "./navigation/side-nav/sidenav-list.component";

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
    PhotosComponent,
    PhotoModalComponent,
    PhotoComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [EventService],
  entryComponents: [PhotoModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
