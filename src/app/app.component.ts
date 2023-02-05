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

  chart=0;
  charts=this.dataComponent.chartsData;
  selectedChart1 = 0;
  selectedChart2 = 0;

    ngOnInit() {
      this.selectedChart1 = 1;
      this.selectedChart2 = 2;
  }
  
}
