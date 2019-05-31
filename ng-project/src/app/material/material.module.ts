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
  MatExpansionModule,
  MatListModule
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
    MatExpansionModule,
    MatIconModule,
    MatListModule
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
    MatExpansionModule,
    MatIconModule,
    MatListModule
  ]
})
export class MaterialModule {}
