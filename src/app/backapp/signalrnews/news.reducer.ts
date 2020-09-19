import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { NewsItem } from './news.model';
import * as NewsActions from './news.actions';

export const newsesFeatureKey = 'newses';

export interface NewsState extends EntityState<NewsItem> {
  groups: string[]
}

export const adapter: EntityAdapter<NewsItem> = createEntityAdapter<NewsItem>({
  selectId: newsItem => newsItem.id
});

export const initialNewsState: NewsState = adapter.getInitialState({
  // groups: ['IT', 'global', 'sport']
  groups: []
});


export const newsReducer = createReducer(
  initialNewsState,
  on(NewsActions.getAllGroupsSuccessAction,
    (state, action) => {
      return { ...state, groups: action.groups }
      // adapter.setAll(action.groups, state)
    }),
  on(NewsActions.receivedGroupJoinedAction,
    (state, action) => {
      let groups = (state.groups.indexOf(action.group) > -1) ? state.groups : state.groups.concat(action.group)
      return { ...state, groups: groups }
    }
  ),
  on(NewsActions.receivedItemAction,
    (state, action) => adapter.addOne(action.newsItem, state)
  ),
  on(NewsActions.receivedGroupHistoryAction,
    (state, action) => {
      console.info('inside reducer: ', action.newsItems);
      // return adapter.addAll(action.newsItems, state)
      return adapter.setAll(action.newsItems, state)
    }

  ),
  on(NewsActions.receivedGroupLeftAction,
    (state, action) => {
      const data = [];
      for (const entry of state.groups) {
        if (entry !== action.group) {
          data.push(entry);
        }
      }
      console.log(data);
      return { ...state, groups: data }
    }
  ),






  // on(NewsActions.addNews,
  //   (state, action) => adapter.addOne(action.news, state)
  // ),
  // on(NewsActions.upsertNews,
  //   (state, action) => adapter.upsertOne(action.news, state)
  // ),
  // on(NewsActions.addNewss,
  //   (state, action) => adapter.addMany(action.newss, state)
  // ),
  // on(NewsActions.upsertNewss,
  //   (state, action) => adapter.upsertMany(action.newss, state)
  // ),
  // on(NewsActions.updateNews,
  //   (state, action) => adapter.updateOne(action.news, state)
  // ),
  // on(NewsActions.updateNewss,
  //   (state, action) => adapter.updateMany(action.newss, state)
  // ),
  // on(NewsActions.deleteNews,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(NewsActions.deleteNewss,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  // on(NewsActions.loadNewss,
  //   (state, action) => adapter.setAll(action.newss, state)
  // ),
  // on(NewsActions.clearNewss,
  //   state => adapter.removeAll(state)
  // ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
