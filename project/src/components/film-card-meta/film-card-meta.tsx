type FilmCardMetaProps = {
    filmCardGenre: string,
    filmCardYear: number
  };

function FilmCardMeta({filmCardGenre, filmCardYear}: FilmCardMetaProps):JSX.Element {
  return (
    <p className="film-card__meta">
      <span className="film-card__genre">{filmCardGenre}</span>
      <span className="film-card__year">{filmCardYear}</span>
    </p>
  );
}

export default FilmCardMeta;
