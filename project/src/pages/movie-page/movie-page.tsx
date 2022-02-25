import Footer from '../../components/footer/footer';
import FilmNavigationItem from '../../components/film-navigation-item/film-navigation-item';
import MoviePageTopBlock from '../../components/movie-page-top-block/movie-page-top-block';
import FilmsList from '../../components/films-list/films-list';
import {Film} from '../../types/films';
import {useParams} from 'react-router-dom';

type MoviePageProps = {
  films: Film[],
};

function MoviePage({films}: MoviePageProps): JSX.Element {
  const params = useParams();
  const filmId = Number(params.id);
  const film = films[filmId - 1];
  const {posterImage, name, rating, scoresCount, description, director, starring} = film;

  return (
    <>
      <section className="film-card film-card--full">
        <MoviePageTopBlock film={film} />

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <FilmNavigationItem className={'film-nav__item film-nav__item--active'} filmNavLink={'overview'} filmNavTitle={'Overview'} />
                  <FilmNavigationItem className={'film-nav__item'} filmNavLink={'details'} filmNavTitle={'Details'} />
                  <FilmNavigationItem className={'film-nav__item'} filmNavLink={'reviews'} filmNavTitle={'Reviews'} />
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">{`${scoresCount} ratings`}</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{description}</p>

                <p className="film-card__director"><strong>{`Director: ${director}`}</strong></p>

                <p className="film-card__starring"><strong>{`Starring: ${starring}`}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={films} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
