import {Link, useParams} from 'react-router-dom';
import HeaderLogo from '../../components/header-logo/header-logo';
import HeaderLogin from '../../components/header-login/header-login';
import AddCommentForm from '../../components/add-comment-form/add-comment-form';
import { useAppSelector } from '../../hooks';


function MoviePageReviews(): JSX.Element {
  const {films} = useAppSelector((state) => state);
  const params = useParams();
  const filmId = Number(params.id);
  const film = films[filmId - 1];
  const {name, backgroundImage, id, posterImage} = film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <HeaderLogo />
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to='/review' className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <HeaderLogin />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddCommentForm />
      </div>

    </section>
  );
}

export default MoviePageReviews;
