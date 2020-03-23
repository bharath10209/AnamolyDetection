import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";
import { MemoryutilizationServiceService } from "src/app/shared/services/memoryutilization-service.service";
import { IMemoryAnomaly } from "src/assets/model/forcasted-element-interface";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-windows-memory-utilization-graph",
  templateUrl: "./windows-memory-utilization-graph.component.html",
  styleUrls: ["./windows-memory-utilization-graph.component.scss"]
})
export class WindowsMemoryUtilizationGraphComponent implements OnInit {

  public graphData;
  public yAxisData = [];
  public yAxisActualData = [];
  public yAxisunboundData = [];
  public xAxisData;
  public chartReady = false;
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];

  // public lineChartData: ChartDataSets[] = [
  //   { data: [0, 2, 2, 2, 0, 8, 3, 7, 1], label: "Memory Utilization" }
  // ];
  // public lineChartLabels: Label[] = [
  //   "2-10-2020",
  //   "3-10-2020",
  //   "4-10-2020",
  //   "5-10-2020",
  //   "6-10-2020",
  //   "7-10-2020",
  //   "8-10-2020"
  // ];
  // public lineChartOptions: (ChartOptions & { annotation: any }) = {
  //   responsive: true,
  // };
  public lineChartColors: Color[] = [
    {
      borderColor: "black"
    }
  ];
  // public lineChartLegend = true;
  public lineChartType = "line";
  public lineChartPlugins = [];
  constructor(
    private anomalyservice: MemoryutilizationServiceService,
    public datepipe: DatePipe
  ) { }

  ngOnInit() {
    this.anomalyservice.getAnomalyData().subscribe(response => {
      //  console.log(response);
      this.createGraph(response.slice(0, 30))
    });
    this.anomalyservice.myData.subscribe(response =>
      this.createGraph(response.slice(0, 30))
    );
  }

  createGraph(graphData: IMemoryAnomaly[]): void {
    this.yAxisData = graphData.map(result => {
      return result.Predicted_Value;
    });

    this.yAxisActualData = graphData.map(result => {
      return result.Actual_Value;
    });

    this.yAxisunboundData = graphData.map(result => {
      return result.Upper_Bond;
    });


    this.xAxisData = graphData.map(result => {
      const newDate = new Date(result.Date);
      const latest_date = this.datepipe.transform(newDate, "EEEE, MMM d, y");
      return latest_date;
    });


    this.lineChartData = [
      { data: this.yAxisData, label: "Predicted Value" },
      { data: this.yAxisunboundData, label: "Upper Value" },
      { data: this.yAxisActualData, label: "Actual Value" },

    ];

    this.lineChartLabels = this.xAxisData;

    this.chartReady = true;
  }
}
