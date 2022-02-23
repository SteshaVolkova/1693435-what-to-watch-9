import HeaderLogo from '../../components/header-logo/header-logo';
import HeaderSignOut from '../../components/header-sign-out/header-sign-out';
import CatalogGenresList from '../../components/catalog-genres-list/catalog-genres-list';
import FilmCardDescription from '../../components/film-card-description/film-card-description';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import {Film} from '../../types/films';

type MainPageProps = {
  films: Film[],
  film: Film,
};

function MainPage({film, films}: MainPageProps): JSX.Element {
  const {backgroundImage, name, posterImage, genre, released} = film;
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <HeaderLogo />
          <HeaderSignOut />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <FilmCardDescription filmCardTitle={name} filmCardGenre={genre} filmCardYear={released} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <CatalogGenresList />
          </ul>

          <FilmsList films={films} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
