import { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { Film } from '../../types/films';
import FilmsList from '../../components/films-list/films-list';
import CatalogGenresList from '../../components/catalog-genres-list/catalog-genres-list';

const DEFAULT_FILM_COUNT = 8;
const FILMS_PER_PAGE = 8;
let arrayForHoldingFilms: Film[] = [];

function MainPageContent(): JSX.Element {
  const {films} = useAppSelector(({FILMS_DATA}) => FILMS_DATA);
  const [genres, setGenres] = useState< string[] >([]);
  const [isShowMoreButton, setIsShowMoreButton] = useState<boolean>(false);
  const activeGenre = useAppSelector(({SELECTED_GENRE}) => SELECTED_GENRE);
  const filmsList = films.filter(({genre}) => activeGenre.selectedGenre === 'All genres' || activeGenre.selectedGenre === genre);

  useEffect(() => {
    setGenres(['All genres', ...new Set(films.map(({genre}) => genre))]);
  }, [films]);

  const [filmsToShow, setFilmsToShow] = useState<Film[]>([]);
  const [next, setNext] = useState(DEFAULT_FILM_COUNT);

  const loopWithSlice = useCallback((start: number, end:number) => {
    const slicedPosts = films.filter(({genre}) => activeGenre.selectedGenre === 'All genres' || activeGenre.selectedGenre === genre).slice(start, end);
    arrayForHoldingFilms = [...arrayForHoldingFilms, ...slicedPosts];
    setFilmsToShow(arrayForHoldingFilms);
  }, [films, activeGenre]);

  const chooseGenre = () => {
    arrayForHoldingFilms = [];
    setNext(DEFAULT_FILM_COUNT);
  };

  useEffect(() => {
    chooseGenre();
  }, [activeGenre]);

  useEffect(() => {
    loopWithSlice(0, FILMS_PER_PAGE);
  }, [loopWithSlice, activeGenre]);

  const handleShowMoreFilms = () => {
    loopWithSlice(next, next + FILMS_PER_PAGE);
    setNext(next + FILMS_PER_PAGE);
  };

  useEffect(() => {
    setIsShowMoreButton(filmsList.length > DEFAULT_FILM_COUNT && filmsToShow.length !== filmsList.length);
  }, [filmsList.length, filmsToShow.length]);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        <CatalogGenresList genres={genres}/>
      </ul>

      <FilmsList films={filmsToShow} />

      {isShowMoreButton &&
      <div className="catalog__more">
        <button onClick={handleShowMoreFilms} className="catalog__button" type="button">Show more</button>
      </div>}
    </section>
  );
}

export default MainPageContent;
