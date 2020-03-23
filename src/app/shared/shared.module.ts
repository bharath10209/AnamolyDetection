import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./modules/material/material.module";
import { CdkTableModule } from "@angular/cdk/table";
@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule],

  exports: [MaterialModule, CdkTableModule]
})
export class SharedModule {}
