type RatingStarsItemProps = {
    starId: string;
    starValue: number;
    starTitle:string;
}

export default function RatingStarsItem({starId, starValue, starTitle}: RatingStarsItemProps): JSX.Element {
  return (
    <>
      <input className="rating__input" id={starId} type="radio" name="rating" value={starValue} />
      <label className="rating__label" htmlFor={starId}>{starTitle}</label>
    </>
  );
}
