import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICPUAnomaly } from "src/assets/model/cpu-interface";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CpuServicesService {
  private _url = "/assets/data/CPU_data.json";

  private myData$ = new BehaviorSubject<ICPUAnomaly[]>([]);
  myData = this.myData$.asObservable();

  constructor(private httpClient: HttpClient) { }

  getAnomalyData(): Observable<ICPUAnomaly[]> {
    return this.httpClient.get<ICPUAnomaly[]>(this._url);
  }
  sendDataToGraph(data: ICPUAnomaly[]): void {
    this.myData$.next(data);
  }
}
