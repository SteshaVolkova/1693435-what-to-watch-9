import { createAction } from '@reduxjs/toolkit';
import { Film, FilmReview, CommentPost } from '../types/films';
import { AppRoute, AuthorizationStatus } from '../const';

export const updateSelectedGenre = createAction<string>('main/updateSelectedGenre');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const loadComments = createAction<FilmReview[]>('data/loadComments');

export const setPromoFilm = createAction<Film>('data/setPromoFilm');

export const setsimilarFilms = createAction<Film[]>('data/setsimilarFilms');

export const postUserReview = createAction<CommentPost>('film/postComment');

export const setError = createAction<string>('film/setError');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');

export const reviewSendError = createAction<boolean>('film/reviewSendError');
