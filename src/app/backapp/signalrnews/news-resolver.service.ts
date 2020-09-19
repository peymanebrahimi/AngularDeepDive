import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, finalize, first, tap } from 'rxjs/operators';
import { AppState } from '../../reducers';
import { getAllGroupsAction } from './news.actions';
import { allGroupsSelect } from "./news.selectors";

@Injectable({
  providedIn: 'root'
})
export class NewsResolverService implements Resolve<string[]> {

  private isBusy = false;
  constructor(private store: Store<AppState>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string[] | Observable<string[]> | Promise<string[]> {
    return this.store.pipe(
      select(allGroupsSelect),
      tap(groups => {
        if (!this.isBusy && groups.length == 0) {
          this.isBusy = true;
          this.store.dispatch(getAllGroupsAction())
          // getAllGroupsAction()
        }
      }
      ),
      filter(gs => gs.length > 0),
      first(),
      finalize(() => this.isBusy = false)
    );

  }
}
