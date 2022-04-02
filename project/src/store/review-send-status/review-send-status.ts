import { createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { ReviewSendStatusData } from '../../types/state';

const initialState: ReviewSendStatusData = {
  reviewSendStatusItem: 'initial',
};

export const reviewSendStatusData = createSlice({
  name: Namespace.reviewSendStatus,
  initialState,
  reducers: {
    reviewSendStatus: (state, action) => {
      state.reviewSendStatusItem = action.payload;
    },
  },
});

export const {reviewSendStatus} = reviewSendStatusData.actions;
