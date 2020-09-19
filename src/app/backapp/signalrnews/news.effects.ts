import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { getAllGroupsAction, getAllGroupsFailureAction, getAllGroupsSuccessAction, joinGroupAction, joinGroupCompleteAction, leaveGroupAction, leaveGroupCompleteAction, sendNewsItemAction, sendNewsItemCompleteAction } from './news.actions';
import { SignalrnewsService } from "./signalrnews.service";


@Injectable()
export class NewsEffects {



  constructor(private actions$: Actions,
    private newsService: SignalrnewsService) { }

  joinGroup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(joinGroupAction),
      switchMap(action => {
        this.newsService.joinGroup(action.group);
        return of(joinGroupCompleteAction({ group: action.group }))
      })
    ));

  leaveGroup$ = createEffect(
    () => this.actions$.pipe(
      ofType(leaveGroupAction),
      switchMap(action => {
        this.newsService.leaveGroup(action.group);
        return of(leaveGroupCompleteAction({ group: action.group }))
      })
    )
  );

  getAllGroups$ = createEffect(
    () => this.actions$.pipe(
      ofType(getAllGroupsAction),
      concatMap(action => this.newsService.getAllGroups().pipe(
        map(groups => getAllGroupsSuccessAction({ groups })),
        catchError(error => of(getAllGroupsFailureAction({ error })))
      )),
    )
  );

  sendNewItem$ = createEffect(
    () => this.actions$.pipe(
      ofType(sendNewsItemAction),
      switchMap((action) => {
        this.newsService.send(action.newsItem);
        return of(sendNewsItemCompleteAction({ newsItem: action.newsItem }));
      })
    )
  );
}
