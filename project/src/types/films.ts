import { AuthorizationStatus } from '../const';

export type Film = {
    id: number,
    name: string,
    posterImage: string,
    previewImage: string,
    backgroundImage: string,
    backgroundColor: string,
    videoLink: string,
    previewVideoLink: string,
    description: string,
    rating: number,
    scoresCount: number,
    director: string,
    starring: [string],
    runTime: number,
    genre: string,
    released: number,
    isFavorite: boolean,
};

export type FilmReview = {
    comment: string,
    date: string,
    id: number,
    rating: number,
    user: {
        id: number,
        name: string,
    }
};

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export type CommentPost = {
  review: string,
  rating: number | null,
}

export type userCommentData = {
  review: string,
  rating: number,
  token: string,
}
