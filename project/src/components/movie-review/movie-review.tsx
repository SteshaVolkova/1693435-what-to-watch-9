import { convertDate } from '../../common';
import {FilmReview} from '../../types/films';

type MovieReviewProps = {
    review: FilmReview,
}

export default function MovieReview({review}: MovieReviewProps): JSX.Element {
  const {comment, date, user, rating} = review;
  const {name} = user;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={date}>{convertDate(new Date(date))}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating.toString().replace('.', ',')}</div>
    </div>
  );
}
