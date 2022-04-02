import { makeFakeFilmComments } from '../../utils/mocks';
import { commentsData, loadComments } from './commentc-data';

const comments = makeFakeFilmComments();

describe('Reducer: commentsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(commentsData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({comments: [], isDataLoaded: false});
  });

  it('should update comments by load comments', () => {
    const state = {comments: [], isDataLoaded: false};
    expect(commentsData.reducer(state, loadComments(comments)))
      .toEqual({comments, isDataLoaded: true});
  });
});
