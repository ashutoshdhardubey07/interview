import { DetailServiceService } from './../detail/detail-service.service';
import { Component, OnInit } from '@angular/core';
import { single } from './data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  data: any =[];
  notcompletedData: any = [];
  completedData: any =[];
  legendPosition: string = 'top-right';
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  view_pie: any[] = [450, 300];
  single: any[];
  gradient = false;
  showLegend = true;
  colorScheme = {
    domain: ['#ff0537ba', '#007bff']
  };
  myGraphData: any = [];
  api: any;
  constructor(public server: DetailServiceService,public router:Router) {
    this.myGraphData = Object.assign(this, { single })
   }

  ngOnInit() {
    this.getData()

  }
  getData() {
  this.api =   this.server.getApi('todos').subscribe((res) => {
      this.data = res
      this.data.forEach(element => {
        if(element.completed){
          this.completedData.push(element)
        }
        if(!element.completed){
          this.notcompletedData.push(element)
        }
      });
      this.myGraphData.single.forEach(element => {
        if (element.name == 'Completed') {
          element.value = this.completedData.length
          this.myGraphData.single = [...this.myGraphData.single];
        }
        if (element.name == 'Not Completed') {
          element.value = this.notcompletedData.length
          this.myGraphData.single = [...this.myGraphData.single];
        }
      });
    })
  }
  goto(route) {
    this.api.unsubscribe()
    this.router.navigate([route])
  }
}
