import MovieReview from '../movie-review/movie-review';
import { FilmReview } from '../../types/films';
import { useEffect, useState } from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import { getCommentsLoadedDataStatus } from '../../store/commentc-data/selectors';

type MovieReviewListProps = {
  reviews: FilmReview[],
};

function MovieTabReview({reviews}: MovieReviewListProps): JSX.Element {
  const isDataLoaded = useAppSelector(getCommentsLoadedDataStatus);

  const [isOnly, setIsOnly] = useState<boolean>(false);

  useEffect(() => {
    setIsOnly(reviews.length < 2);
  }, [reviews.length]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="film-card__reviews film-card__row">
      {!isOnly ?
        <>
          <div className="film-card__reviews-col">
            {reviews.map((review) => (
              <MovieReview key={review.id} review={review} />
            )).splice(0, Math.ceil(reviews.length / 2))}
          </div>
          <div className="film-card__reviews-col">
            {reviews.map((review) => (
              <MovieReview key={review.id} review={review} />
            )).splice(Math.ceil(reviews.length / 2))}
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
