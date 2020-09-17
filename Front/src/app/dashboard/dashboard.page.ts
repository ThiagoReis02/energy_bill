import { Component, OnInit, ViewChild } from '@angular/core';
import { EChartOption } from 'echarts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  chartOption1: EChartOption = {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Fev', 'Mai', 'Abr', 'Mai', 'Jun', 'Jul'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [45, 50, 50, 100, 112, 150,21],
        type: 'line',
      },
    ],
  };

  chartOption2: EChartOption = {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Fev', 'Mai', 'Abr', 'Mai', 'Jun', 'Jul'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [45, 50, 50, 100, 112, 150,21],
        type: 'bar',
      },
    ],
  };
  constructor() { }

  ngOnInit() {

  }


}
