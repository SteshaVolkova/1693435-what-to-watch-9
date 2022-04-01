import {Film} from '../../types/films';

type MovieTabOverviewProps = {
    film: Film,
}

export default function MovieTabOverview({film}: MovieTabOverviewProps): JSX.Element {
  const {rating, scoresCount, description, director, starring} = film;

  const convertFilmRating = (overallRating: number) => {
    if (overallRating >= 0 && overallRating < 3) {
      return 'Bad';
    } else if (overallRating >= 3 && overallRating < 5) {
      return 'Normal';
    } else if (overallRating >= 5 && overallRating < 8) {
      return 'Good';
    } else if (overallRating >= 8 && overallRating < 10) {
      return 'Very good';
    } else if (overallRating === 10) {
      return 'Awesome';
    }
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{convertFilmRating(rating)}</span>
          <span className="film-rating__count">{`${scoresCount} ratings`}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>{`Director: ${director}`}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starring.join(', ')} and other</strong></p>
      </div>
    </>

  );
}
