import { Component } from '@angular/core';
import { ChartsService } from './charts.service';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss'],
  providers: [ChartsService]
})
export class EChartsComponent {
  showloading: boolean = false;



  constructor(private chartsService: ChartsService) {

  }
}
