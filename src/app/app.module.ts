import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./core/core.module";
import { GraphsModule } from "./graphs/graphs.module";
import { AnomalyServicesService } from "./shared/services/anomaly-services.service";
import { DataDisplayComponent } from './data-display/data-display.component';
import { DataCardComponentComponent } from './data-card-component/data-card-component.component';
import { DataLinuxComponentComponent } from './data-linux-component/data-linux-component.component';
import { DataNetworkComponentComponent } from './data-network-component/data-network-component.component';

@NgModule({
  declarations: [AppComponent, DataDisplayComponent, DataCardComponentComponent, DataLinuxComponentComponent, DataNetworkComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    GraphsModule
  ],
  entryComponents: [AppComponent],
  providers: [AnomalyServicesService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
