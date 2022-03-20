import {Link} from 'react-router-dom';
import HeaderLogo from '../header-logo/header-logo';
import HeaderLogin from '../../components/header-login/header-login';
import FilmCardDescription from '../film-card-description/film-card-description';
import {Film} from '../../types/films';
import { useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';

type MoviePageTopBlockProps = {
    film: Film
  };

function MoviePageTopBlock({film}: MoviePageTopBlockProps):JSX.Element {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const {authorizationStatus} = useAppSelector((state) => state);
  const {backgroundImage, name} = film;

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
        <FilmCardDescription film={film}>
          {isAuth ? <Link to='review' className="btn film-card__button">Add review</Link>: ''}
        </FilmCardDescription>
      </div>
    </div>
  );
}

export default MoviePageTopBlock;
