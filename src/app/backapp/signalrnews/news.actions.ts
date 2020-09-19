import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { NewsItem } from './news.model';

export const joinGroupAction = createAction(
  '[news] JOIN_GROUP',
  props<{ group: string }>()
);

export const joinGroupCompleteAction = createAction(
  '[news] JOIN_GROUP_Complete',
  props<{ group: string }>()
);

export const receivedGroupJoinedAction = createAction(
  '[news] RECEIVED_GROUP_JOIN',
  props<{ group: string }>()
);


export const leaveGroupAction = createAction(
  '[news] LEAVE_GROUP',
  props<{ group: string }>()
);

export const leaveGroupCompleteAction = createAction(
  '[news] LEAVE_GROUP_Complete',
  props<{ group: string }>()
);

export const receivedGroupLeftAction = createAction(
  '[news] RECEIVED_GROUP_LEFT',
  props<{ group: string }>()
);

export const sendNewsItemAction = createAction(
  '[news] SEND_NEWS_ITEM',
  props<{ newsItem: NewsItem }>()
);

export const sendNewsItemCompleteAction = createAction(
  '[news] SEND_NEWS_ITEM_COMPLETE',
  props<{ newsItem: NewsItem }>()
);

export const getAllGroupsAction = createAction(
  '[news] GET_ALL_GROUPS'
);

export const getAllGroupsSuccessAction = createAction(
  '[news] GET_ALL_GROUPS_Success',
  props<{ groups: string[] }>()
);

export const getAllGroupsFailureAction = createAction(
  '[news] GET_ALL_GROUPS_Failure',
  props<{ error: any }>()
);

export const receivedGroupHistoryAction = createAction(
  '[news] receivedGroupHistory',
  props<{ newsItems: NewsItem[] }>()
);

export const receivedItemAction = createAction(
  '[news] receivedItemAction',
  props<{ newsItem: NewsItem }>()
);





// export const loadNewss = createAction(
//   '[News/API] Load Newss',
//   props<{ newss: NewsItem[] }>()
// );

// export const addNews = createAction(
//   '[News/API] Add News',
//   props<{ news: NewsItem }>()
// );

// export const upsertNews = createAction(
//   '[News/API] Upsert News',
//   props<{ news: NewsItem }>()
// );

// export const addNewss = createAction(
//   '[News/API] Add Newss',
//   props<{ newss: NewsItem[] }>()
// );

// export const upsertNewss = createAction(
//   '[News/API] Upsert Newss',
//   props<{ newss: NewsItem[] }>()
// );

// export const updateNews = createAction(
//   '[News/API] Update News',
//   props<{ news: Update<NewsItem> }>()
// );

// export const updateNewss = createAction(
//   '[News/API] Update Newss',
//   props<{ newss: Update<NewsItem>[] }>()
// );

// export const deleteNews = createAction(
//   '[News/API] Delete News',
//   props<{ id: string }>()
// );

// export const deleteNewss = createAction(
//   '[News/API] Delete Newss',
//   props<{ ids: string[] }>()
// );

// export const clearNewss = createAction(
//   '[News/API] Clear Newss'
// );
