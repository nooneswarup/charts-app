import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-linebar-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './linebar-chart.component.html',
  styleUrls: ['./linebar-chart.component.css']
})
export class LinebarChartComponent implements OnChanges{
  options: any;
  @Input() chart : any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    var xAxisData = this.chart.xAxis;
    var yAxisData = this.chart.yAxis;
    var seriesData = this.chart.series;
    var legendData:Array<string>=[];
    

     for (let index = 0; index < seriesData.length; index++) {
       legendData.push(seriesData[index].name);
     }
     
    this.options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true }
        }
      },
      legend: {
        data: legendData
      },
      xAxis:[
        {
          type: xAxisData.type,
          data: xAxisData.data,
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis:yAxisData,
      series:seriesData
    }
  }
}
