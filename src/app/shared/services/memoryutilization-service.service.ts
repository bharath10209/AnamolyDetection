import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IMemoryAnomaly } from "src/assets/model/forcasted-element-interface";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MemoryutilizationServiceService {
  private _url = "/assets/data/link_data.json";

  private myData$ = new BehaviorSubject<IMemoryAnomaly[]>([]);
  myData = this.myData$.asObservable();

  constructor(private httpClient: HttpClient) { }
  getAnomalyData(): Observable<IMemoryAnomaly[]> {
    return this.httpClient.get<IMemoryAnomaly[]>(this._url);
  }
  sendDataToGraph(data: IMemoryAnomaly[]): void {
    this.myData$.next(data);
  }
}
