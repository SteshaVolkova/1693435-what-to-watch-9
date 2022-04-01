import { Namespace } from '../../const';
import { State } from '../../types/state';
import { FilmReview } from '../../types/films';

export const getCommentsList = (state: State): FilmReview[] => state[Namespace.commentsData].comments;
export const getCommentsLoadedDataStatus = (state: State): boolean => state[Namespace.commentsData].isDataLoaded;
