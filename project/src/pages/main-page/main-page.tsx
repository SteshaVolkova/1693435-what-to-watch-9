import HeaderLogo from '../../components/header-logo/header-logo';
import HeaderSignOut from '../../components/header-sign-out/header-sign-out';
import CatalogGenresList from '../../components/catalog-genres-list/catalog-genres-list';
import FilmCardDescription from '../../components/film-card-description/film-card-description';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import { Film } from '../../types/films';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';


type MainPageProps = {
  films: Film[],
  film: Film,
};

function MainPage({film, films}: MainPageProps): JSX.Element {
  const {backgroundImage, name, posterImage} = film;
  const [genres, setGenres] = useState< string[] >([]);
  const selectedGenre = useAppSelector((state) => state.selectedGenre);

  useEffect(() => {

    setGenres(['All genres', ...new Set(films.map(({genre}) => genre))]);

  }, [films]);

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

            <FilmCardDescription film={film} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <CatalogGenresList genres={genres}/>
          </ul>

          <FilmsList films={films.filter(({genre}) => selectedGenre === 'All genres' || selectedGenre === genre)} />

        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
