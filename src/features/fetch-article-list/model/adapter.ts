import { createEntityAdapter } from '@reduxjs/toolkit';

import { IArticle } from 'entities/article';

export const articleListAdapter = createEntityAdapter<IArticle>({});
