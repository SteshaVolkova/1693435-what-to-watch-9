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
        <a className="small-film-card__link" href="film-page.html">{smallFilmCardName}</a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
