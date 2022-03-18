import MovieReview from '../movie-review/movie-review';
import { FilmReview } from '../../types/films';
import { useEffect, useState } from 'react';

type MovieReviewListProps = {
  reviews: FilmReview[],
};

function MovieTabReview({reviews}: MovieReviewListProps): JSX.Element {
  const [isOnly, setIsOnly] = useState<boolean>(false);

  useEffect(() => {
    setIsOnly(reviews.length < 2);
  }, [reviews.length]);

  return (
    <div className="film-card__reviews film-card__row">
      {!isOnly ?
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
