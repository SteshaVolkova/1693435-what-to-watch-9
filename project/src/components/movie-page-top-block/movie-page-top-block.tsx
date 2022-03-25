import { Link, useParams } from 'react-router-dom';
import HeaderLogo from '../header-logo/header-logo';
import HeaderLogin from '../../components/header-login/header-login';
import { useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import AddToMyListButton from '../add-to-my-list-button/add-to-my-list-button';
import { AppRoute } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getFilmsList } from '../../store/films-data/selectors';

export default function MoviePageTopBlock():JSX.Element {
  const films = useAppSelector(getFilmsList);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const params = useParams();
  const filmId = Number(params.id);
  const film = films[filmId - 1];

  useEffect (() => {
    setIsAuth(authorizationStatus === 'AUTH');
  }, [authorizationStatus]);

  return (
    <div className="film-card__hero">
      <div className="film-card__bg">
        <img src={film.backgroundImage} alt={film.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <HeaderLogo />
        <HeaderLogin />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__desc">
          <h2 className="film-card__title">{film.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{film.genre}</span>
            <span className="film-card__year">{film.released}</span>
          </p>

          <div className="film-card__buttons">
            <Link to={`${AppRoute.Player}/${film.id}`} className='btn btn--play film-card__button'>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </Link>
            <AddToMyListButton filmId={film.id} />
            {isAuth ? <Link to={AppRoute.FilmReview} className="btn film-card__button">Add review</Link>: ''}
          </div>
        </div>
      </div>
    </div>
  );
}
