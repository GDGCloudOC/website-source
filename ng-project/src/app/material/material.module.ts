import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatExpansionModule
} from "@angular/material";
import { MatJumbotronModule } from "@angular-material-extensions/jumbotron";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatJumbotronModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatExpansionModule
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatJumbotronModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatExpansionModule
  ]
})
export class MaterialModule {}
