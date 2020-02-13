import { Component, OnInit } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'kit-chart-13v1',
  templateUrl: './13v1.component.html',
})
export class CuiChart13v1Component implements OnInit {
  chartData = data
  chartOptions = {
    showPoint: true,
    showLine: true,
    showArea: true,
    fullWidth: true,
    showLabel: false,
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0,
    },
    axisY: {
      showGrid: false,
      showLabel: false,
      offset: 0,
    },
    chartPadding: 0,
    low: 0,
  }
  constructor() {}
  ngOnInit() {}
}