import {Link} from 'react-router-dom';
import HeaderLogo from '../header-logo/header-logo';
import HeaderSignOut from '../header-sign-out/header-sign-out';
import FilmCardDescription from '../film-card-description/film-card-description';

type MoviePageTopBlockProps = {
    filmCardSrc: string,
    filmCardTitle: string,
    filmCardGenre: string,
    filmCardYear: number
  };

function MoviePageTopBlock({filmCardSrc, filmCardTitle, filmCardGenre, filmCardYear}: MoviePageTopBlockProps):JSX.Element {
  return (
    <div className="film-card__hero">
      <div className="film-card__bg">
        <img src={filmCardSrc} alt={filmCardTitle} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <HeaderLogo />
        <HeaderSignOut />
      </header>

      <div className="film-card__wrap">
        <FilmCardDescription filmCardTitle={filmCardTitle} filmCardGenre={filmCardGenre} filmCardYear={filmCardYear}>
          <Link to="/films/1/review" className="btn film-card__button">Add review</Link>
        </FilmCardDescription>
      </div>
    </div>
  );
}

export default MoviePageTopBlock;
