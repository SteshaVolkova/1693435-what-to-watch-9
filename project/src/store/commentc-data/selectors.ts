import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { FilmReview } from '../../types/films';

export const getCommentsList = (state: State): FilmReview[] => state[NameSpace.commentsData].comments;
export const getCommentsLoadedDataStatus = (state: State): boolean => state[NameSpace.commentsData].isDataLoaded;
