import { Component, OnInit, Input } from '@angular/core';
import { FuturepredictionServiceService } from "src/app/shared/services/futureprediction-service.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-data-network-component',
  templateUrl: './data-network-component.component.html',
  styleUrls: ['./data-network-component.component.scss']
})
export class DataNetworkComponentComponent implements OnInit {

  @Input('heroes') masterName: string;
  predicationValues: any;
  SlicedValues: any = [];
  CPUdisplayValues: any = [];
  memoryDisplayValues: any = [];
  linkdownDisplayValues: any = [];
  dayIndex : number = 0;
  constructor( private anomalyservice: FuturepredictionServiceService,
    public datepipe: DatePipe) { }

  ngOnInit() {
    this.anomalyservice.getAnomalyData().subscribe(response => {
      this.predicationValues = response;
      this.changePredictionsBack();
    });
    this.anomalyservice.myData.subscribe(response =>
      console.log(response)
    );
  }
  changePredictionsBack() {
    this.dayIndex = 0;
    this.SlicedValues = [];
    this.SlicedValues.push(this.predicationValues.LinkDown.slice(0, 5))
    this.linkdownDisplayValues = this.SlicedValues[0];
   console.log(this.SlicedValues)
  }


}
