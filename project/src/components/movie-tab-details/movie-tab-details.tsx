import {Film} from '../../types/films';

type MovieTabDetailsProps = {
    film: Film,
}

export default function MovieTabDetails({film}: MovieTabDetailsProps): JSX.Element {
  const {director, runTime, genre, released} = film;

  const getTimeFromMins = (mins: number) => {
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    return `${hours  }h ${  minutes  }m`;
  };

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {film.starring.map((item: string, index: number) => {
              if (index === film.starring.length - 1) {
                return (<span key={item}>{item}</span>);
              }
              return (<span key={item}>{item},<br/></span>);
            },
            )}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{getTimeFromMins(runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}
