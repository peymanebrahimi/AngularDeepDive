import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { NewsItem } from './news.model';
import * as NewsActions from './news.actions';

export const newsesFeatureKey = 'newses';

export interface State extends EntityState<NewsItem> {
  // additional entities state properties
}

export const adapter: EntityAdapter<NewsItem> = createEntityAdapter<NewsItem>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(NewsActions.addNews,
    (state, action) => adapter.addOne(action.news, state)
  ),
  on(NewsActions.upsertNews,
    (state, action) => adapter.upsertOne(action.news, state)
  ),
  on(NewsActions.addNewss,
    (state, action) => adapter.addMany(action.newss, state)
  ),
  on(NewsActions.upsertNewss,
    (state, action) => adapter.upsertMany(action.newss, state)
  ),
  on(NewsActions.updateNews,
    (state, action) => adapter.updateOne(action.news, state)
  ),
  on(NewsActions.updateNewss,
    (state, action) => adapter.updateMany(action.newss, state)
  ),
  on(NewsActions.deleteNews,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(NewsActions.deleteNewss,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(NewsActions.loadNewss,
    (state, action) => adapter.setAll(action.newss, state)
  ),
  on(NewsActions.clearNewss,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
