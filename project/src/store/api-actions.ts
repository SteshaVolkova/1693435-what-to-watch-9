import { AxiosInstance } from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { APIRoute, AppRoute, TIMEOUT_SHOW_ERROR, AuthorizationStatus } from '../const';
import { AppDispatch, State } from '../types/state.js';
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
import { errorData } from './store-error-data/store-error-data';
import { userData } from './user-data/user-data';
import { reviewSendStatus } from './review-send-status/review-send-status';
import { loadFavoriteFilms } from './favorite-films-data/favorite-films-data';

export const clearErrorAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/setError',
  (_arg, {dispatch, extra: api}) => {
    setTimeout(
      () => dispatch(errorData('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/loadFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film[]>(APIRoute.Films);
      dispatch(loadFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/setPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film>(APIRoute.PromoFilm);
      dispatch(setPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, number | null, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/setsimilarFilms',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);
      dispatch(setSimilarFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoriteFilm = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/loadFavoriteFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film[]>(APIRoute.FavoriteFilms);
      dispatch(loadFavoriteFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const pushFavoriteFilm = createAsyncThunk<void, PushFilmToFavorite, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/pushFavoriteFilms',
  async ({id, status}, {dispatch, extra: api}) => {
    try {
      await api.post<userCommentData>(`${APIRoute.FavoriteFilms}/${id}/${status}`, {id, status});
      dispatch(fetchFavoriteFilm());
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchCommentsAction = createAsyncThunk<void, number | null, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/loadComments',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmReview[]>(`${APIRoute.CommentsFilm}/${id}`);
      dispatch(loadComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const postComment = createAsyncThunk<void, CommentPost, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/postComment',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    try {
      dispatch(reviewSendStatus('sending'));
      await api.post<userCommentData>(`${APIRoute.CommentPost}/${id}`, {comment, rating});
      dispatch(postUserReview({id, comment, rating}));
      dispatch(reviewSendStatus('initial'));
    } catch (error) {
      errorHandle(error);
      dispatch(reviewSendStatus('error'));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get(APIRoute.Login);
      dispatch(userData(data));
      dispatch(fetchFavoriteFilm());
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      new Response(APIRoute.Login);
      dispatch(userData(data));
      dispatch(fetchFavoriteFilm());
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Root));
    } catch (error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);
