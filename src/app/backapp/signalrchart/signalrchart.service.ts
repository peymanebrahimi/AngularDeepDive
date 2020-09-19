import { Injectable } from '@angular/core';
import { ChartModel } from './chart-model';
import * as signalR from "@aspnet/signalr";
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SignalrchartService {
  public data: ChartModel[];
  public bradcastedData: ChartModel[];

  private hubConnection: signalR.HubConnection;
  private chartSubject = new Subject<ChartModel>();

  data$ = this.chartSubject.asObservable();

  constructor(private snackBar: MatSnackBar) {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.serverUrl}/chart`)
      .build();

    this.connect();
  }

  private connect() {
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))

    this.registerEvents();
  }

  public registerEvents = () => {
    this.hubConnection.on('transferchartdata', (data) => {
      console.info(data);
      this.chartSubject.next(data);
    });

    this.addBroadcastChartDataListener();
  }

  public disconnect() {
    this.hubConnection.stop();
  }

  public broadcastChartData = () => {
    this.hubConnection.invoke('broadcastchartdata')
      .catch(err => {
        let snackRef = this.snackBar.open(err, 'Close');

        snackRef.onAction().subscribe(x => console.log('snack closed action fired', x));
        snackRef.afterDismissed().subscribe(x => console.log('snack after dismissed.'))
      });


  }

  private addBroadcastChartDataListener = () => {
    this.hubConnection.on('broadcastchartdata', (data) => {
      this.chartSubject.next(data);
    })
  }


}
