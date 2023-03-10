import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-boxedplot-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './boxedplot-chart.component.html',
  styleUrls: ['./boxedplot-chart.component.css']
})
export class BoxedplotChartComponent implements OnChanges{
  options: any;
  @Input() chart : any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    var xAxisData = this.chart.xAxis;
    var yAxisData = this.chart.yAxis;
    var datasetData = this.chart.dataset;
    this.options = {
      title: [
        {
          text: 'Cost per mile',
          left: 'center'
        },
        {
          text: 'cost per mile',
          borderColor: '#999',
          borderWidth: 1,
          textStyle: {
            fontWeight: 'normal',
            fontSize: 14,
            lineHeight: 20
          },
          left: '10%',
          top: '90%'
        }
      ],
      dataset: [
        {
          source: datasetData
        },
        {
          transform: {
            type: 'boxplot',
            config: { itemNameFormatter: '{value}' }
          }
        },
        {
          fromDatasetIndex: 1,
          fromTransformResult: 1
        }
      ],
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: xAxisData,
      yAxis: yAxisData,
      series: [
        {
          name: 'boxplot',
          type: 'boxplot',
          datasetIndex: 1
        }
      ]
    }
  }
}
