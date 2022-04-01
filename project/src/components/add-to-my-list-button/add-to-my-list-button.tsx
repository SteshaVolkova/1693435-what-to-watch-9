import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { pushFavoriteFilm } from '../../store/api-actions';
import { getFavoriteFilmsList } from '../../store/favorite-films-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { Film } from '../../types/films';

type AddToMyListButtonProps = {
  filmId: number,
}

export default function AddToMyListButton({filmId}: AddToMyListButtonProps): JSX.Element {
  const favoriteFilms = useAppSelector(getFavoriteFilmsList);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const [filmStatus, setFilmStatus] = useState(0);

  const handleToFavorite = (id: number, status: number) => {
    dispatch(pushFavoriteFilm({id, status}));
  };

  useEffect(() => {
    if (!favoriteFilms) {
      return;
    }
    setFilmStatus(favoriteFilms.find((item: Film) => item.id === filmId) ? 1 : 0);
  }, [filmId, favoriteFilms]);

  return(
    <button
      onClick={() => {
        handleToFavorite(filmId, 1 - filmStatus);
      }}
      className="btn btn--list film-card__button"
      type="button"
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={authorizationStatus === 'AUTH' && filmStatus ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
    </button>
  );
}
