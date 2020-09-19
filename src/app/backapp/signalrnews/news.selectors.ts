import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NewsState, selectAll } from "./news.reducer";
import * as fromNews from './news.reducer';

export const selectNewsState = createFeatureSelector<NewsState>(fromNews.newsesFeatureKey); // forFeatureName

export const allNewsItemsSelect = createSelector(
    selectNewsState,
    selectAll
  );

export const allGroupsSelect = createSelector(
    selectNewsState,
    (state: NewsState) => state.groups
);

