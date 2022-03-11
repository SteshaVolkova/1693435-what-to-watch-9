import MovieReview from '../movie-review/movie-review';
import { FilmReview } from '../../types/films';

type MovieReviewListProps = {
  reviews: FilmReview[],
};

function MovieTabReview({reviews}: MovieReviewListProps): JSX.Element {

  return (
    <div className="film-card__reviews film-card__row">
      {reviews.length > 1 ?
        <>
          <div className="film-card__reviews-col">
            {reviews.map((review) => (
              <MovieReview key={review.id} review={review} />
            )).splice(0, reviews.length / 2)}
          </div>
          <div className="film-card__reviews-col">
            {reviews.map((review) => (
              <MovieReview key={review.id} review={review} />
            )).splice(reviews.length / 2)}
          </div>
        </> :
        <div className="film-card__reviews-col">
          {reviews.map((review) => (
            <MovieReview key={review.id} review={review} />
          ))}
        </div>}
    </div>
  );
}

export default MovieTabReview;
