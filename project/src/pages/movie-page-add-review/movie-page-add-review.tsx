import {Link, useParams} from 'react-router-dom';
import HeaderLogo from '../../components/header-logo/header-logo';
import HeaderLogin from '../../components/header-login/header-login';
import AddCommentForm from '../../components/add-comment-form/add-comment-form';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { AppRoute } from '../../const';


function MoviePageReviews(): JSX.Element {
  const {films} = useAppSelector((state) => state);
  const params = useParams();
  const filmId = Number(params.id);
  const film = films[filmId - 1];

  if (!film) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <HeaderLogo />
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.FilmPage}/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.FilmPage}/${film.id}/${AppRoute.FilmReview}`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <HeaderLogin />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddCommentForm />
      </div>

    </section>
  );
}

export default MoviePageReviews;
