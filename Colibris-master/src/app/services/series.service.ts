import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  serie: Object;
  listeSeries: Array<object>;

  constructor(private http: HttpClient) {
    this.getSeries();
  }

  getSeries() {
    this.http.get<Array<object>>('assets/modele/series.json').subscribe( 
      data => {
        console.log(data);
        this.listeSeries = data;
      }
    );
  }
}
