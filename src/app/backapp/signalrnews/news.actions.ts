import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { NewsItem } from './news.model';

export const loadNewss = createAction(
  '[News/API] Load Newss', 
  props<{ newss: NewsItem[] }>()
);

export const addNews = createAction(
  '[News/API] Add News',
  props<{ news: NewsItem }>()
);

export const upsertNews = createAction(
  '[News/API] Upsert News',
  props<{ news: NewsItem }>()
);

export const addNewss = createAction(
  '[News/API] Add Newss',
  props<{ newss: NewsItem[] }>()
);

export const upsertNewss = createAction(
  '[News/API] Upsert Newss',
  props<{ newss: NewsItem[] }>()
);

export const updateNews = createAction(
  '[News/API] Update News',
  props<{ news: Update<NewsItem> }>()
);

export const updateNewss = createAction(
  '[News/API] Update Newss',
  props<{ newss: Update<NewsItem>[] }>()
);

export const deleteNews = createAction(
  '[News/API] Delete News',
  props<{ id: string }>()
);

export const deleteNewss = createAction(
  '[News/API] Delete Newss',
  props<{ ids: string[] }>()
);

export const clearNewss = createAction(
  '[News/API] Clear Newss'
);
