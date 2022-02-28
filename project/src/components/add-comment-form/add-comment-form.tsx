import {useState} from 'react';
import {Star} from '../../types/rating-stars';

function AddCommentForm(): JSX.Element {
  const stars: Star[] = [
    {'id': 10},{'id': 9},{'id': 8},{'id': 7},{'id': 6},{'id': 5},{'id': 4},{'id': 3},{'id': 2},{'id': 1},
  ];

  const [statRating, setStatRating] = useState<null | number>(null);
  const hanldeMouseOver = (id: number) => {
    setStatRating(id);
  };

  const [commentData, setCommentData] = useState('');
  const fieldChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const enteredName = event.target.value;
    setCommentData(enteredName);
  };

  const [isHideDetails, setIsHideDetails] = useState(true);
  const showDetailsHandle = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();
    setIsHideDetails((currentState) => !currentState);
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {stars.map((star) => (
            <div onClick={() => {hanldeMouseOver(star.id);}} key={star.id}>
              <input className="rating__input" id={`star-${star.id}`} type="radio" name="rating" value={star.id} />
              <label className="rating__label" htmlFor={`star-${star.id}`}>{`Rating ${star.id}`}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={fieldChangeHandler} value={commentData} name="comment" className="add-review__textarea" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
          <button className="add-review__btn" type="button" onClick={showDetailsHandle}>{isHideDetails ? 'Показать' : 'Спрятать'}</button>
        </div>
      </div>
      {isHideDetails ? null : <div>Ваша оценка:{statRating}. Ваш коментарий: {commentData}.</div>}
    </form>
  );
}

export default AddCommentForm;
