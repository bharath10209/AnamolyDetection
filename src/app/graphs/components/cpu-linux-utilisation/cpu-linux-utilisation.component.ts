import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";
import { CpuLinuxServicesService } from "src/app/shared/services/cpu-linux-services.service";
import { ICPUAnomaly } from "src/assets/model/cpu-interface";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-cpu-linux-utilisation',
  templateUrl: './cpu-linux-utilisation.component.html',
  styleUrls: ['./cpu-linux-utilisation.component.scss']
})
export class CpuLinuxUtilisationComponent implements OnInit {

  public graphData;
  public yAxisData = [];
  public yAxisActualData = [];
  public yAxisunboundData = [];
  public xAxisData;
  public chartReady = false;
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  
  // public lineChartData: ChartDataSets[] = [
  //   { data: [40,11,17,22,21,9,0,40,11,17,22,21,9,0,40,11,17,22,21,9,0,40,11,17,22,21,9,0,40,11,17,22,21,9,0,40,11,17,22,21,9,0,40,11,17,22,21,9,0,40,11,17,22,21,9,0,40,11,17,22,21,9,0,], label: 'CPU Utilization' },
  //   { data: [40,18,21,25,20,9,4,40,18,21,25,20,9,4,40,18,21,25,20,9,4,40,18,21,25,20,9,4,40,18,21,25,20,9,4,40,18,21,25,20,9,4,40,18,21,25,20,9,4,40,18,21,25,20,9,4,40,18,21,25,20,9,4,], label: 'CPU Utilization' },
  //   { data: [60,20,28,21,0,10,10,60,20,28,21,0,10,10,60,20,28,21,0,10,10,60,20,28,21,0,10,10,60,20,28,21,0,10,10,60,20,28,21,0,10,10,60,20,28,21,0,10,10,60,20,28,21,0,10,10,60,20,28,21,0,10,10,], label: 'CPU Utilization' },
  // ];
  // public lineChartLabels: Label[] = ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1',];
 
  public lineChartColors: Color[] = [
    {
      borderColor: "black"
    }
  ];
  // public lineChartLegend = true;
  public lineChartType = "line";
  public lineChartPlugins = [];
  constructor(
    private anomalyservice: CpuLinuxServicesService,
    public datepipe: DatePipe
  ) {}

  ngOnInit() {
    this.anomalyservice.getAnomalyData().subscribe(response => {
       console.log(response);
       this.createGraph(response.slice(0,30))
      });
      this.anomalyservice.myData.subscribe(response =>
        this.createGraph(response.slice(0,30))
      );
  }

  createGraph(graphData: any[]): void {
    this.yAxisData = graphData.map(result => {
      return result.Value;
    });
    
    this.yAxisActualData = graphData.map(result =>{
      return result.Actual;
    });

    this.yAxisunboundData = graphData.map(result =>{
      return result.upper_bond;
    });


    this.xAxisData = graphData.map(result => {
      const newDate = new Date(result.Date);
      const latest_date = this.datepipe.transform(newDate, "MMM d");
      return latest_date;
    });


    this.lineChartData = [
      {data : this.yAxisData, label: "Predicted Value" },
      {data : this.yAxisunboundData, label: "Upper Value"},
      {data : this.yAxisActualData, label: "Actual Value"},
      
    ];

    this.lineChartLabels = this.xAxisData;

    this.chartReady = true;
  }

}
