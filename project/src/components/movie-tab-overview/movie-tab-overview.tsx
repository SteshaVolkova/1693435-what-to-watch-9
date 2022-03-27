import {Film} from '../../types/films';

type MovieTabOverviewProps = {
    film: Film,
}

export default function MovieTabOverview({film}: MovieTabOverviewProps): JSX.Element {
  const {rating, scoresCount, description, director, starring} = film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          {(rating >= 0 && rating < 3) && <span className="film-rating__level">Bad</span>}
          {(rating >= 3 && rating < 5) && <span className="film-rating__level">Normal</span>}
          {(rating >= 5 && rating < 8) && <span className="film-rating__level">Good</span>}
          {(rating >= 8 && rating < 10) && <span className="film-rating__level">Very good</span>}
          {(rating === 10) && <span className="film-rating__level">Awesome</span>}
          <span className="film-rating__count">{`${scoresCount} ratings`}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>{`Director: ${director}`}</strong></p>

        <p className="film-card__starring"><strong>{`Starring: ${starring}`}</strong></p>
      </div>
    </>

  );
}
