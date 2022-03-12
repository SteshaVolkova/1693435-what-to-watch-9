import {createAsyncThunk} from '@reduxjs/toolkit';
import { APIRoute, AppRoute, TIMEOUT_SHOW_ERROR, AuthorizationStatus } from '../const';
import { api } from '../store';
import { store } from '../store';
import { Film, FilmReview, CommentPost, userCommentData } from '../types/films';
import { loadFilms, requireAuthorization, setError, redirectToRoute, loadComments, setPromoFilm, setsimilarFilms, postUserReview } from './action';
import { errorHandle } from '../services/error-handle';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';

export const clearErrorAction = createAsyncThunk(
  'film/setError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk(
  'data/loadFilms',
  async () => {
    try {
      const {data} = await api.get<Film[]>(APIRoute.Films);
      store.dispatch(loadFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/loadComments',
  async (id: number | null) => {
    try {
      const {data} = await api.get<FilmReview[]>(`${APIRoute.CommentsFilm}/${id}`);
      store.dispatch(loadComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchPromoAction = createAsyncThunk(
  'data/setPromoFilm',
  async () => {
    try {
      const {data} = await api.get<Film>(APIRoute.PromoFilm);
      store.dispatch(setPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);


export const fetchSimilarFilmsAction = createAsyncThunk(
  'data/setsimilarFilms',
  async (id: number | null) => {
    try {
      const {data} = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);
      store.dispatch(setsimilarFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const postComment = createAsyncThunk(
  'film/postComment',
  async ({review, rating}: CommentPost) => {
    try {
      const {data: {token}} = await api.post<userCommentData>(APIRoute.CommentPost, {review, rating});
      saveToken(token);
      store.dispatch(postUserReview({review, rating}));
      store.dispatch(redirectToRoute(AppRoute.Film));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Root));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);
