import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-stacked-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stacked-chart.component.html',
  styleUrls: ['./stacked-chart.component.css']
})
export class StackedChartComponent implements OnChanges{
  options: any;
  @Input() chart : any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    var xAxisData = this.chart.xAxis;
    var yAxisData = this.chart.yAxis;
    var seriesData = this.chart.series;
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
      series: seriesData
    }
  }

}
