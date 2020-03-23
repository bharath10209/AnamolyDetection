import { Component, OnInit } from "@angular/core";
import { AnomalyServicesService } from "src/app/shared/services/anomaly-services.service";
import { IAnomaly } from "src/assets/model/anomaly-interface";

@Component({
  selector: "app-windows-cpu-utilization-table",
  templateUrl: "./windows-cpu-utilization-table.component.html",
  styleUrls: ["./windows-cpu-utilization-table.component.scss"]
})
export class WindowsCpuUtilizationTableComponent implements OnInit {
  displayedColumns = ["Date", "Value"];
  // ELEMENT_DATA: ForcastedElement[] = [
  //   { weekDays: "2-10-2020", pridictedValue: "7" },
  //   { weekDays: "3-10-2020", pridictedValue: "8" },
  //   { weekDays: "4-10-2020", pridictedValue: "9" },
  //   { weekDays: "5-10-2020", pridictedValue: "10" },
  //   { weekDays: "6-10-2020", pridictedValue: "11" },
  //   { weekDays: "7-10-2020", pridictedValue: "12" }
  // ];
  loadTable = false;
  ELEMENT_DATA: any;
  dataSource: any;

  constructor(private anomalyservice: AnomalyServicesService) {}

  ngOnInit() {
    this.anomalyservice.getAnomalyData().subscribe(response => {
      this.loadTable = true;
      this.createTable(response.slice(0, 7));
    });

    this.anomalyservice.myData.subscribe(response =>
      this.createTable(response)
    );
  }

  createTable(tableData: IAnomaly[]): void {
    this.ELEMENT_DATA = tableData.slice();
    this.dataSource = this.ELEMENT_DATA;
  }
}
