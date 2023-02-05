import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { DataComponent } from 'src/app/data/data.component';

@Component({
  selector: 'app-linebar-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './linebar-chart.component.html',
  styleUrls: ['./linebar-chart.component.css']
})
export class LinebarChartComponent implements OnChanges{
  options: any;
  @Input() chart : number=0;

  constructor(private dataComponent: DataComponent) { }
  charts=this.dataComponent.chartsData;

  ngOnChanges(changes: SimpleChanges) {
    var xAxisData = this.charts[this.chart-1].linebar.xAxis;
    var yAxisData = this.charts[this.chart-1].linebar.yAxis;
    var seriesData = this.charts[this.chart-1].linebar.series;
    var legendData:Array<string>=[];
    

     for (let index = 0; index < this.charts[this.chart-1].linebar.number; index++) {
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
