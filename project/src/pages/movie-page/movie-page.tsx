import Footer from '../../components/footer/footer';
import MoviePageTopBlock from '../../components/movie-page-top-block/movie-page-top-block';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import { useParams } from 'react-router-dom';
import MovieTabs from '../../components/movie-tabs/movie-tabs';
import { useAppSelector } from '../../hooks';
import { fetchCommentsAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import { store } from '../../store';
import { useEffect } from 'react';


function MoviePage(): JSX.Element {
  const {films, comments, similarFilms} = useAppSelector((state) => state);
  const params = useParams();
  const filmId = Number(params.id);
  const film = films[filmId - 1];
  const { posterImage, name, id } = film;

  useEffect(() => {
    store.dispatch(fetchCommentsAction(id));
    store.dispatch(fetchSimilarFilmsAction(id));
  }, [id]);

  return (
    <>
      <section className="film-card film-card--full">
        <MoviePageTopBlock film={film} />

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <MovieTabs film={film} reviews={comments} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {similarFilms.filter((item) => (item.genre === film.genre)).splice(0, 4).map((item) => <SmallFilmCard key={item.id} film={item}/>)}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
