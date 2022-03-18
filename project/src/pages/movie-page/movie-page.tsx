import Footer from '../../components/footer/footer';
import MoviePageTopBlock from '../../components/movie-page-top-block/movie-page-top-block';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import { useNavigate, useParams } from 'react-router-dom';
import MovieTabs from '../../components/movie-tabs/movie-tabs';
import { useAppSelector } from '../../hooks';
import { fetchCommentsAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import { store } from '../../store';
import { useEffect } from 'react';
import { AppRoute } from '../../const';
import LoadingScreen from '../../components/loading-screen/loading-screen';


function MoviePage(): JSX.Element {
  const {films} = useAppSelector (({FILMS_DATA}) => FILMS_DATA);
  const {comments} = useAppSelector (({COMMENTS_DATA}) => COMMENTS_DATA);
  const {similarFilms} = useAppSelector(({SIMILAR_FILMS_DATA}) => SIMILAR_FILMS_DATA);
  const params = useParams();
  const filmId = Number(params.id);
  const film = films[filmId - 1];
  const navigate = useNavigate();

  useEffect(() => {
    if (!film) {
      navigate(AppRoute.NotFound);
      return;
    }
    store.dispatch(fetchCommentsAction(film.id));
    store.dispatch(fetchSimilarFilmsAction(film.id));
  }, [film, navigate]);

  if (!film) {
    return <LoadingScreen />;
  }
  return (
    <>
      <section className="film-card film-card--full">
        <MoviePageTopBlock film={film} />

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
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
