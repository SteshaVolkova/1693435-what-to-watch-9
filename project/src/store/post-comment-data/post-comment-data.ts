import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PostUserReview } from '../../types/state';

const initialState: PostUserReview = {
  userComment: {
    id: 0,
    comment: '',
    rating: 0,
  },
};

export const postCommentData = createSlice({
  name: NameSpace.PostUserReview,
  initialState,
  reducers: {
    postUserReview: (state, action) => {
      state.userComment = action.payload;
    },
  },
});

export const {postUserReview} = postCommentData.actions;
