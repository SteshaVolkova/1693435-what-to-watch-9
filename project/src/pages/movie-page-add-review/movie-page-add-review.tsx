import {Link} from 'react-router-dom';
import HeaderLogo from '../../components/header-logo/header-logo';
import HeaderSignOut from '../../components/header-sign-out/header-sign-out';
import RatingStarsItem from '../../components/rating-stars-item/rating-stars-item';
import {Film} from '../../types/films';

type MoviePageReviewsProps = {
  film: Film,
};

function MoviePageReviews({film}: MoviePageReviewsProps): JSX.Element {
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
                <Link to={`/films/${id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <HeaderSignOut />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              <RatingStarsItem starId={'star-10'} starValue={10} starTitle={'Rating 10'} />

              <RatingStarsItem starId={'star-9'} starValue={9} starTitle={'Rating 9'} />

              <RatingStarsItem starId={'star-8'} starValue={8} starTitle={'Rating 8'} />

              <RatingStarsItem starId={'star-7'} starValue={7} starTitle={'Rating 7'} />

              <RatingStarsItem starId={'star-6'} starValue={6} starTitle={'Rating 6'} />

              <RatingStarsItem starId={'star-5'} starValue={5} starTitle={'Rating 5'} />

              <RatingStarsItem starId={'star-4'} starValue={4} starTitle={'Rating 4'} />

              <RatingStarsItem starId={'star-3'} starValue={3} starTitle={'Rating 3'} />

              <RatingStarsItem starId={'star-2'} starValue={2} starTitle={'Rating 2'} />

              <RatingStarsItem starId={'star-1'} starValue={1} starTitle={'Rating 1'} />
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}

export default MoviePageReviews;
