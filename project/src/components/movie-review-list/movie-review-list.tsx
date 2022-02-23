import MovieReview from '../movie-review/movie-review';
import {FilmReview} from '../../types/films';

type MovieReviewListProps = {
  reviews: FilmReview[];
};

function MovieReviewList({reviews}: MovieReviewListProps): JSX.Element {

  return (
    <div className="film-card__reviews-col">
      {reviews.map((review) => (
        <MovieReview key={review.id} review={review}/>
      ))}
    </div>
  );
}

export default MovieReviewList;
