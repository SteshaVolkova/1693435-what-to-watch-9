import { makeUserData, makeUserEmptyData } from '../../utils/mocks';
import { postCommentData, postUserReview } from './post-comment-data';

const userComment = makeUserData();
const userEmptyInfo = makeUserEmptyData();

describe('Reducer: postCommentData', () => {
  it('without additional parameters should return initial state', () => {
    expect(postCommentData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({userComment: userEmptyInfo});
  });

  it('should update comments by load comments', () => {
    const state = {userComment: userEmptyInfo};
    expect(postCommentData.reducer(state, postUserReview(userComment)))
      .toEqual({userComment});
  });
});
