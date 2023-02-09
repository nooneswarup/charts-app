import { Component, OnInit} from '@angular/core';
import { DataComponent } from './data/data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'charts-app';
  constructor (private dataComponent: DataComponent)
  {}

  charts=this.dataComponent.chartsData;
  selectedChart1:any;
  selectedChart2:any;

    ngOnInit() {
      this.selectedChart1 = this.charts[0];
      this.selectedChart2 = this.charts[1];
  }
  
}
