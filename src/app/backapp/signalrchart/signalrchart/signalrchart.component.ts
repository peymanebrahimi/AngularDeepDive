import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignalrchartService } from "../signalrchart.service";
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChartType } from 'chart.js';


@Component({
  selector: 'app-signalrchart',
  templateUrl: './signalrchart.component.html',
  styleUrls: ['./signalrchart.component.css']
})
export class SignalrchartComponent implements OnInit {
  // https://code-maze.com/netcore-signalr-angular/
  public chartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true,
    // scales: {
    //   yAxes: [{
    //     ticks: {
    //       beginAtZero: true
    //     }
    //   }]
    // }
  };
  public chartLabels: string[] = ['Real time data for the chart'];
  public chartType: ChartType = 'bar';
  public chartLegend: boolean = true;
  public colors: any[] = [{ backgroundColor: '#5491DA' },
  { backgroundColor: '#E74C3C' }, { backgroundColor: '#82E0AA' },
  { backgroundColor: '#E5E7E9' }]

  constructor(public signalRService: SignalrchartService,
    private http: HttpClient,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    // this.signalRService.startConnection();
    // this.signalRService.addTransferChartDataListener();
    // this.signalRService.addBroadcastChartDataListener();
    this.startHttpRequest();
    this.signalRService.connect();
  }

  private startHttpRequest = () => {
    this.http.get(`${environment.serverUrl}/api/charts`)
      .subscribe(res => {
        // this.snackBar.open(res, null, {
        //   duration: 2000,
        // });
        console.log(res);
      })
  }

  public chartClicked = (event: any) => {
    console.log(event);
    this.signalRService.broadcastChartData();
  }

  listenToChartData() {
    this.signalRService.broadcastChartData();
  }

  ngOnDestroy() {
    this.signalRService.disconnect();
  }
}
