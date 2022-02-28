import MovieReview from '../movie-review/movie-review';
import { FilmReview } from '../../types/films';

type MovieReviewListProps = {
  reviews: FilmReview[],
};

function MovieTabReview({reviews}: MovieReviewListProps): JSX.Element {

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.length/2}
        {reviews.map((review) => (
          <MovieReview key={review.id} review={review}/>
        ))}
      </div>
    </div>
  );
}

export default MovieTabReview;
