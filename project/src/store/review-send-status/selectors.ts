import { Namespace } from '../../const';
import { State } from '../../types/state';
import { ReviewSendStatus } from '../../types/user-data';

export const getReviewSendStatus = (state: State): ReviewSendStatus => state[Namespace.reviewSendStatus].reviewSendStatus;
