import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FuturepredictionServiceService {
  private _url = "/assets/data/preds_data.json";
  private myData$ = new BehaviorSubject<any[]>([]);
  myData = this.myData$.asObservable();


  constructor(private httpClient: HttpClient) { }

  getAnomalyData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this._url);
  }
  sendDataToGraph(data: any[]): void {
    this.myData$.next(data);
  }
}
