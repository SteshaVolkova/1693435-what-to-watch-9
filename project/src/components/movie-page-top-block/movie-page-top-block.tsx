import HeaderLogo from '../header-logo/header-logo';
import HeaderSignOut from '../header-sign-out/header-sign-out';
import FilmCardMeta from '../film-card-meta/film-card-meta';
import PlayFilmButton from '../play-filn-button/play-filn-button';
import AddToMyListButton from '../add-to-my-list-button/add-to-my-list-button';

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
        <div className="film-card__desc">
          <h2 className="film-card__title">{filmCardTitle}</h2>
          <FilmCardMeta filmCardGenre={filmCardGenre} filmCardYear={filmCardYear} />

          <div className="film-card__buttons">
            <PlayFilmButton />
            <AddToMyListButton />
            <a href="add-review.html" className="btn film-card__button">Add review</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePageTopBlock;
