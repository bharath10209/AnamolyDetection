import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IAnomaly } from "src/assets/model/anomaly-interface";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs";
// import { Data } from "assets/data/anomaly_data.json";

@Injectable({
  providedIn: "root"
})
export class AnomalyServicesService {
  private _url = "/assets/data/anomaly_data.json";

  private myData$ = new BehaviorSubject<IAnomaly[]>([]);
  myData = this.myData$.asObservable();

  constructor(private httpClient: HttpClient) {}

  getAnomalyData(): Observable<IAnomaly[]> {
    return this.httpClient.get<IAnomaly[]>(this._url);
  }
  sendDataToGraph(data: IAnomaly[]): void {
    this.myData$.next(data);
  }
  // setWeeklyData(weeklydata) {
  //   this.weeklyData = weeklydata;

  //   console.log(this.weeklyData);
  // }
  // getWeeklyData() {
  //   return this.weeklyData;
  // }
}
