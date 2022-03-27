import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { getPromoFilmList } from '../../store/promo-film-data/selectors';
import AddToMyListButton from '../add-to-my-list-button/add-to-my-list-button';

export default function PromoFilm(): JSX.Element {
  const promoFilm = useAppSelector(getPromoFilmList);

  return (
    <>
      <div className="film-card__bg">
        <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
      </div>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm.genre}</span>
              <span className="film-card__year">{promoFilm.released}</span>
            </p>

            <div className="film-card__buttons">
              <Link to={`${AppRoute.Player}/${promoFilm.id}`} className="btn btn--play film-card__button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </Link>
              <AddToMyListButton filmId={promoFilm.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
