import { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { Film } from '../../types/films';
import FilmsList from '../../components/films-list/films-list';
import CatalogGenresList from '../../components/catalog-genres-list/catalog-genres-list';
import { getFilmsList } from '../../store/films-data/selectors';
import { getSelectedGenre } from '../../store/selected-genre/selectors';
import { DEFAULT_FILM_COUNT, FILMS_PER_PAGE, ZERO_VALUE } from '../../const';

export default function MainPageContent(): JSX.Element {
  const films = useAppSelector(getFilmsList);
  const [genres, setGenres] = useState< string[] >([]);
  const [isShowMoreButton, setIsShowMoreButton] = useState<boolean>(false);
  const [filmsToShow, setFilmsToShow] = useState<Film[]>([]);
  const [next, setNext] = useState(DEFAULT_FILM_COUNT);
  const selectedGenre = useAppSelector(getSelectedGenre);
  const filmsList = films.filter(({genre}) => selectedGenre === 'All genres' || selectedGenre === genre);

  useEffect(() => {
    setGenres(['All genres', ...new Set(films.map(({genre}) => genre))]);
  }, [films]);

  const chooseGenre = () => {
    setNext(DEFAULT_FILM_COUNT);
  };

  useEffect(() => {
    chooseGenre();
  }, [selectedGenre]);

  const loopWithSlice = useCallback((start: number, end:number) => {
    setFilmsToShow(films.filter(({genre}) => selectedGenre === 'All genres' || selectedGenre === genre).slice(start, end));
  }, [films, selectedGenre]);

  useEffect(() => {
    loopWithSlice(ZERO_VALUE, FILMS_PER_PAGE);
  }, [loopWithSlice, selectedGenre]);

  const handleShowMoreFilms = () => {
    loopWithSlice(ZERO_VALUE, next + FILMS_PER_PAGE);
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
