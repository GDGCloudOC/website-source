import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxImageGalleryModule } from "ngx-image-gallery";
import { NgxLinkifyjsModule } from "ngx-linkifyjs";

import { AboutComponent } from "./about/about.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./contact/contact.component";
import { EventJumbotronComponent } from "./events/event-jumbotron.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { EventComponent } from "./events/events.component";
import { HomeComponent } from "./home/home.component";
import { LayoutComponent } from "./layout/layout.component";
import { MaterialModule } from "./material/material.module";
import { HeaderComponent } from "./navigation/header/header.component";
import { PhotosComponent } from "./media/photos/photos.component";
import { SidenavListComponent } from "./navigation/side-nav/sidenav-list.component";
import { CommentDialogComponent } from "./comments/comment-dialog.component";
import { CommentService } from "./services/comment.service";
import { CommentThumbnailComponent } from "./comments/comment-thumbnail.component";
import { MediaComponent } from "./media/media.component";
import { VideosComponent } from "./media/videos/videos.component";
import { EventService } from "./services/event.service";
import { CommentReplyComponent } from "./comments/replies/comment-reply.component";

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
    SidenavListComponent,
    CommentDialogComponent,
    CommentThumbnailComponent,
    MediaComponent,
    VideosComponent,
    CommentReplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxImageGalleryModule,
    NgxLinkifyjsModule.forRoot()
  ],
  providers: [EventService, CommentService],
  bootstrap: [AppComponent],
  entryComponents: [CommentDialogComponent]
})
export class AppModule {}
