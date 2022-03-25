import {createAsyncThunk} from '@reduxjs/toolkit';
import { APIRoute, AppRoute, TIMEOUT_SHOW_ERROR, AuthorizationStatus } from '../const';
import { api } from '../store';
import { store } from '../store';
import { Film, FilmReview, CommentPost, userCommentData, PushFilmToFavorite } from '../types/films';
import { redirectToRoute } from './action';
import { errorHandle } from '../services/error-handle';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { requireAuthorization } from './user-process/user-process';
import { loadFilms } from './films-data/films-data';
import { loadComments } from './commentc-data/commentc-data';
import { setPromoFilm } from './promo-film-data/promo-film-data';
import { setSimilarFilms } from './similar-films-data/similar-films-data';
import { postUserReview } from './post-comment-data/post-comment-data';
import { setError } from './set-data-error/set-data-error';
import { userData } from './user-data/user-data';
import { reviewSendStatus } from './review-send-status/review-send-status';
import { loadFavoriteFilms } from './favorite-films-data/favorite-films-data';

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
      store.dispatch(setSimilarFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoriteFilm = createAsyncThunk(
  'data/loadFavoriteFilms',
  async () => {
    try {
      const {data} = await api.get<Film[]>(APIRoute.FavoriteFilms);
      store.dispatch(loadFavoriteFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const pushFavoriteFilm = createAsyncThunk(
  'film/pushFavoriteFilms',
  async ({id, status}: PushFilmToFavorite) => {
    try {
      await api.post<userCommentData>(`${APIRoute.FavoriteFilms}/${id}/${status}`, {id, status});
      store.dispatch(fetchFavoriteFilm());
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

export const postComment = createAsyncThunk(
  'film/postComment',
  async ({id, comment, rating}: CommentPost) => {
    try {
      store.dispatch(reviewSendStatus('sending'));
      await api.post<userCommentData>(`${APIRoute.CommentPost}/${id}`, {comment, rating});
      store.dispatch(postUserReview({id, comment, rating}));
      store.dispatch(reviewSendStatus('initial'));
    } catch (error) {
      store.dispatch(reviewSendStatus('error'));
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const {data} = await api.get(APIRoute.Login);
      store.dispatch(userData(data));
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
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      new Response(APIRoute.Login);
      store.dispatch(userData(data));
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
