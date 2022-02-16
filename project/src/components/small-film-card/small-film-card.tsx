import {Link} from 'react-router-dom';

type SmallFilmCardProps = {
    smallFilmCardSrc: string;
    smallFilmCardName: string;
};

function SmallFilmCard({smallFilmCardSrc, smallFilmCardName}: SmallFilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={smallFilmCardSrc} alt={smallFilmCardName} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to="films/1">{smallFilmCardName}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
