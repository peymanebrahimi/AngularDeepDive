import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as signalR from "@aspnet/signalr";
import { Store } from '@ngrx/store';
import { NewsState } from './news.reducer';
import * as NewsActions from './news.actions';
import { NewsItem } from './news.model';
import { AuthorizeService } from '../../authorization/authorize.service';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalrnewsService {
  private hubConnection: signalR.HubConnection;

  constructor(private http: HttpClient,
    private authService: AuthorizeService,
    private store: Store<NewsState>) {

    this.authService.getAccessToken().pipe(
      mergeMap(t => {
        this.hubConnection = new signalR.HubConnectionBuilder()
          .withUrl(`${environment.serverUrl}/news`, { accessTokenFactory: () => t })
          .configureLogging(environment.production ? signalR.LogLevel.None : signalR.LogLevel.Information)
          .build();
        this.registerEvents();
        this.connect();
        return of(this.hubConnection)
      })
    ).subscribe();
  }

  private connect() {
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ', err))
  }

  public disconnect() {
    this.hubConnection
      .stop()
      .catch(err => console.log('Error while stopping connection: ', err));
  }

  registerEvents() {
    this.hubConnection.on('JoinGroup', (data: string) => {
      console.log('recieved data from the hub: ', data);
      this.store.dispatch(NewsActions.receivedGroupJoinedAction({ group: data }));
    });

    this.hubConnection.on('LeaveGroup', (data: string) => {
      this.store.dispatch(NewsActions.receivedGroupLeftAction({ group: data }));
    });

    this.hubConnection.on('History', (newsItems: NewsItem[]) => {
      // console.log('recieved history from the hub');
      // console.log(newsItems);
      this.store.dispatch(NewsActions.receivedGroupHistoryAction({ newsItems }));
    });
    this.hubConnection.on('Send', (newsItem: NewsItem) => {
      this.store.dispatch(NewsActions.receivedItemAction({ newsItem }));
    });

  }

  joinGroup(group: string): void {
    if (this.hubConnection) {
      this.hubConnection.invoke('JoinGroup', group);
    }
  }

  leaveGroup(group: string): void {
    if (this.hubConnection) {
      this.hubConnection.invoke('LeaveGroup', group);
    }
  }

  getAllGroups() {
    return this.http.get<string[]>(`${environment.serverUrl}/api/news`);
  }

  send(newsItem: NewsItem): NewsItem {
    if (this.hubConnection) {
      this.hubConnection.invoke('Send', newsItem);
    }
    return newsItem;
  }
}
