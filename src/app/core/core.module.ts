import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./header/header.component";
import { EnsureModuleLoadedOnceGuard } from "./ensureModuleLoadedOnceGuard";
import { NavigationItemComponent } from './navigation-item/navigation-item.component';

@NgModule({
  declarations: [HeaderComponent, NavigationItemComponent],
  imports: [CommonModule, SharedModule, CoreRoutingModule],
  exports: [SharedModule, HeaderComponent, NavigationItemComponent]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    super(parentModule);
  }
}
