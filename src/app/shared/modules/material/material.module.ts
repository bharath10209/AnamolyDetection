import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";

import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule,
  MatTabsModule,
  MatFormFieldModule,
  MatDialogModule,
  MatCardModule,
  MatExpansionModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatSnackBarModule,
  MatSliderModule,
  MatBadgeModule,
  MatTableModule
} from "@angular/material";

const materialModules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule,
  MatTabsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatCardModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatChipsModule,
  MatSliderModule,
  MatBadgeModule,
  MatSnackBarModule,
  MatTableModule
];

@NgModule({
  declarations: [],
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule {}
