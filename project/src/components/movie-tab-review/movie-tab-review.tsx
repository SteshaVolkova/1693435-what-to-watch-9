import MovieReview from '../movie-review/movie-review';
import { FilmReview } from '../../types/films';
import { useEffect, useState } from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import { getCommentsLoadedDataStatus } from '../../store/commentc-data/selectors';

const COMMENT_COLUMN_LENGTH = 2;

type MovieReviewListProps = {
  reviews: FilmReview[],
};

export default function MovieTabReview({reviews}: MovieReviewListProps): JSX.Element {
  const isDataLoaded = useAppSelector(getCommentsLoadedDataStatus);

  const [isOnly, setIsOnly] = useState<boolean>(false);

  useEffect(() => {
    setIsOnly(reviews.length < COMMENT_COLUMN_LENGTH);
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
            )).splice(0, Math.ceil(reviews.length / COMMENT_COLUMN_LENGTH))}
          </div>
          <div className="film-card__reviews-col">
            {reviews.map((review) => (
              <MovieReview key={review.id} review={review} />
            )).splice(Math.ceil(reviews.length / COMMENT_COLUMN_LENGTH))}
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
