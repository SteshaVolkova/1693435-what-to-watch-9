import Footer from '../../components/footer/footer';
import MoviePageTopBlock from '../../components/movie-page-top-block/movie-page-top-block';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import { Film } from '../../types/films';
import { useParams } from 'react-router-dom';
import MovieTabs from '../../components/movie-tabs/movie-tabs';
import { FilmReview } from '../../types/films';

type MoviePageProps = {
  films: Film[],
  reviews: FilmReview[],
};

function MoviePage({films, reviews }: MoviePageProps): JSX.Element {
  const params = useParams();
  const filmId = Number(params.id);
  const film = films[filmId - 1];
  const { posterImage, name } = film;

  return (
    <>
      <section className="film-card film-card--full">
        <MoviePageTopBlock film={film} />

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <MovieTabs film={film} reviews={reviews} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {films.filter((item) => (item.genre === film.genre)).splice(0, 4).map((item) => <SmallFilmCard key={item.id} film={item}/>)}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
