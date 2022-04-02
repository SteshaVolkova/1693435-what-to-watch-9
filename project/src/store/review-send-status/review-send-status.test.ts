import { makeReviewSendStatusError, makeReviewSendStatusInitial, makeReviewSendStatusSending } from '../../utils/mocks';
import { reviewSendStatus, reviewSendStatusData } from './review-send-status';

const statusInitial = makeReviewSendStatusInitial();
const StatusSending = makeReviewSendStatusSending();
const statusError = makeReviewSendStatusError();

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(reviewSendStatusData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({reviewSendStatusItem: 'initial'});
  });

  it('should update reviewSendStatusData to initial', () => {
    const state = {reviewSendStatusItem: statusInitial};

    expect(reviewSendStatusData.reducer(state, reviewSendStatus(statusInitial)))
      .toEqual({reviewSendStatusItem: statusInitial});
  });

  it('should update reviewSendStatusData to sending', () => {
    const state = {reviewSendStatusItem: StatusSending};

    expect(reviewSendStatusData.reducer(state, reviewSendStatus(StatusSending)))
      .toEqual({reviewSendStatusItem: StatusSending});
  });

  it('should update reviewSendStatusData to error', () => {
    const state = {reviewSendStatusItem: statusError};

    expect(reviewSendStatusData.reducer(state, reviewSendStatus(statusError)))
      .toEqual({reviewSendStatusItem: statusError});
  });
});
