import { Link, useNavigate } from 'react-router-dom';
import HeaderLogo from '../header-logo/header-logo';
import HeaderLogin from '../../components/header-login/header-login';
import { Film } from '../../types/films';
import { useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import AddToMyListButton from '../add-to-my-list-button/add-to-my-list-button';
import { AppRoute } from '../../const';

type MoviePageTopBlockProps = {
    film: Film
  };

function MoviePageTopBlock({film}: MoviePageTopBlockProps):JSX.Element {
  const {promoFilm} = useAppSelector(({PROMO_FILM_DATA}) => PROMO_FILM_DATA);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {backgroundImage, name} = film;
  const navigate = useNavigate();

  useEffect (() => {
    setIsAuth(authorizationStatus === 'AUTH');
  }, [authorizationStatus]);

  return (
    <div className="film-card__hero">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <HeaderLogo />
        <HeaderLogin />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__desc">
          <h2 className="film-card__title">{promoFilm.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{promoFilm.genre}</span>
            <span className="film-card__year">{promoFilm.released}</span>
          </p>

          <div className="film-card__buttons">
            <button onClick={() => {
              navigate(`${AppRoute.Player}/${film.id}`);
            }}
            className="btn btn--play film-card__button"
            type="button"
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <AddToMyListButton />
            {isAuth ? <Link to={AppRoute.FilmReview} className="btn film-card__button">Add review</Link>: ''}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePageTopBlock;
