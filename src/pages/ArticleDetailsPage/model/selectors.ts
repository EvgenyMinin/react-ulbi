import { createSelector, Selector } from '@reduxjs/toolkit';

import { RootState } from 'app/providers';

import { articleDetailsSelectors } from 'entities/article';
import { userSelectors } from 'entities/user';

export const canEditArticleSelector: Selector<RootState, boolean> = createSelector(
  [userSelectors.userSelector, articleDetailsSelectors.getArticleDetails],
  (user, article) => {
    if (!user || !article) {
      return false;
    }

    return user.authData?.id === article.data?.id;
  }
);
