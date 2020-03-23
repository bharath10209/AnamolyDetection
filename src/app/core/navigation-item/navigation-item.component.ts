import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AnomalyServicesService } from "src/app/shared/services/anomaly-services.service";
import { IAnomaly } from "src/assets/model/anomaly-interface";
// import { mergeMap, map } from "rxjs/operators";
@Component({
  selector: "app-navigation-item",
  templateUrl: "./navigation-item.component.html",
  styleUrls: ["./navigation-item.component.scss"]
})
export class NavigationItemComponent implements OnInit {
  public anamolyData = [];
  start = 0;
  weekEnd = 7;
  isFirstClick = true;
  constructor(private anomalyService: AnomalyServicesService) {}

  ngOnInit() {
    this.anamolyData = ['test','test1'];
  }

  onForwardClick() {
    console.log("forward week");
    this.isFirstClick = false;
    this.anomalyService.getAnomalyData().subscribe(data => {
      if (!this.isFirstClick) {
        this.start = this.start + 7;
        this.weekEnd = this.weekEnd + 7;
      }
      if (this.getWeeklyData(data)) {
        this.anomalyService.sendDataToGraph(this.getWeeklyData(data));
        console.log(this.getWeeklyData(data));
      }
    });
  }

  getWeeklyData(data: IAnomaly[]): any {
    return data.slice(this.start, this.weekEnd).length !== 0
      ? data.slice(this.start, this.weekEnd)
      : false;
  }

  onBackwardClick() {
    console.log("backward week");
    this.anomalyService.getAnomalyData().subscribe(data => {
      this.start = this.start - 7;
      this.weekEnd = this.weekEnd - 7;

      if (this.getWeeklyData(data)) {
        this.anomalyService.sendDataToGraph(this.getWeeklyData(data));
        console.log(this.getWeeklyData(data));
      }
    });
  }
}
