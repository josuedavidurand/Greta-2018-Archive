import { Component, OnInit } from '@angular/core';
import { SeriesService } from './../services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(public lSeries:SeriesService) { }

  ngOnInit() { }

}
