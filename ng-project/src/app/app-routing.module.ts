import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { EventComponent } from "./events/events.component";
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  { path: "", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "media", component: MediaComponent },
  { path: "events", component: EventComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
