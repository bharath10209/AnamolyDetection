import { Component, OnInit } from '@angular/core';
import { FuturepredictionServiceService } from "src/app/shared/services/futureprediction-service.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {
  predicationValues: any;
  SlicedValues: any = [];
  CPUdisplayValues: any = [];
  memoryDisplayValues: any = [];
  linkdownDisplayValues: any = [];
  dayIndex : number = 0;
  constructor(
    private anomalyservice: FuturepredictionServiceService,
    public datepipe: DatePipe
  ) { }

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
    this.SlicedValues.push(this.predicationValues.CPUWINDOWS.slice(0, 5))
    this.SlicedValues.push(this.predicationValues.CPUMemory_Preds.slice(0, 5))
    this.SlicedValues.push(this.predicationValues.CPULINUX.slice(0, 5))
    this.SlicedValues.push(this.predicationValues.LinkDown.slice(0, 5))
   console.log(this.SlicedValues)
  }

  changePredictionsFront() {
    this.dayIndex = 3;
    this.SlicedValues = [];
    this.SlicedValues.push(this.predicationValues.CPU.slice(3, 6))
    this.SlicedValues.push(this.predicationValues.Memory_Preds.slice(3, 6))
    this.SlicedValues.push(this.predicationValues.LinkDown.slice(3, 6))
    this.CPUdisplayValues = this.SlicedValues[0];
    this.memoryDisplayValues = this.SlicedValues[1];
    this.linkdownDisplayValues = this.SlicedValues[2];
  }

}
