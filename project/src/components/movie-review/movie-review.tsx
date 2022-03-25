import {FilmReview} from '../../types/films';

const formatDate = (date: Date): string => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  return `${month} ${day}, ${year}`;
};

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
          <time className="review__date" dateTime={date}>{formatDate(new Date(date))}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating.toString().replace('.', ',')}</div>
    </div>
  );
}
