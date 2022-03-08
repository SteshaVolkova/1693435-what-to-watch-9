import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/films';
import { AuthorizationStatus } from '../const';

export const updateSelectedGenre = createAction<string>('main/updateSelectedGenre');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const setError = createAction<string>('film/setError');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
