import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NewsState } from '../news.reducer';
import * as fromActions from "../news.actions";
import { Observable } from 'rxjs';
import { NewsItem } from '../news.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { allNewsItemsSelect } from '../news.selectors';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  group = 'IT';
  author = '';
  newsItems$?: Observable<NewsItem[]>;
  groups$?: Observable<string[]>;
  newsItem: NewsItem;


  constructor(private store: Store<NewsState>,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) {
      
    this.newsItem = new NewsItem('', '', this.author, this.group);
    // this.newsItem.id = Date.parse((new Date()).toString()); 

    
  }
  
  ngOnInit(): void {
    this.newsItems$ = this.store.select(allNewsItemsSelect);
    // this.store.dispatch(fromActions.getAllGroupsAction());
    this.groups$ = this.route.data.pipe(
      map((data: { groups?: string[] }) => data.groups!)
    );
  }


  joinGroup() {
    this.store.dispatch(fromActions.joinGroupAction({ group: this.group }));
  }

  leaveGroup() {
    this.store.dispatch(fromActions.leaveGroupAction({ group: this.group }));
  }

  sendNewsItemToGroup() {
    // this.newsItem.newsGroup = this.group;
    // this.newsItem.author = this.author;
    this.store.dispatch(fromActions.sendNewsItemAction({ newsItem: this.newsItem }));
    this.newsItem.header = '';// = new NewsItem('', '', this.author, this.group);
    this.newsItem.newsText = '';
  }



}
