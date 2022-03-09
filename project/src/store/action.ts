import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/films';
import { AppRoute, AuthorizationStatus } from '../const';

export const updateSelectedGenre = createAction<string>('main/updateSelectedGenre');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const setError = createAction<string>('film/setError');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
