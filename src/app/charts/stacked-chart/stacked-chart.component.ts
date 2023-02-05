import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { DataComponent } from 'src/app/data/data.component';

@Component({
  selector: 'app-stacked-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stacked-chart.component.html',
  styleUrls: ['./stacked-chart.component.css']
})
export class StackedChartComponent implements OnChanges{
  options: any;
  @Input() chart : number=0;

  constructor(private dataComponent: DataComponent) { }
  charts=this.dataComponent.chartsData;

  ngOnChanges(changes: SimpleChanges) {
    var xAxisData = this.charts[this.chart-1].stacked.xAxis;
    var yAxisData = this.charts[this.chart-1].stacked.yAxis;
    this.options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: xAxisData.type,
          data: xAxisData.data
        }
      ],
      yAxis: [
        {
          type: yAxisData.type
        }
      ],
      series: yAxisData.series
    }
  }

}
