import { Component } from '@angular/core';
import myData from './charts.json';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  chartsData:any=myData;
}
