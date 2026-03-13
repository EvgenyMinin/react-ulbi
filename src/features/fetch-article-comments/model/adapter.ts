import { createEntityAdapter } from '@reduxjs/toolkit';

import { TCommentItem } from '@/entities/comment';

export const commentsAdapter = createEntityAdapter<TCommentItem>({});
