import { FormEvent, useRef, useState } from 'react';
import { postComment } from '../../store/api-actions';
import { Star } from '../../types/rating-stars';
import { CommentPost } from '../../types/films';
import { store } from '../../store';

const MAX_COMMENT_LENGTH = 400;
const MIN_COMMENT_LENGTH = 50;

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

  const ratingRef = useRef<HTMLInputElement | null>(null);
  const commentRef = useRef<HTMLTextAreaElement | null>(null);

  const onSubmit = ({review, rating}: CommentPost) => {
    store.dispatch(postComment({review, rating}));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (statRating === null || commentData === '' || commentData.length < MIN_COMMENT_LENGTH || commentData.length > MAX_COMMENT_LENGTH) {
      onSubmit({
        rating: statRating,
        review: commentData,
      });
    }
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {stars.map((star) => (
            <div onClick={() => {hanldeMouseOver(star.id);}} key={star.id}>
              <input ref={ratingRef} className="rating__input" id={`star-${star.id}`} type="radio" name="rating" value={star.id} />
              <label className="rating__label" htmlFor={`star-${star.id}`}>{`Rating ${star.id}`}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea ref={commentRef} onChange={fieldChangeHandler} value={commentData} name="comment" className="add-review__textarea" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          {(statRating === null || commentData === '' || commentData.length < MIN_COMMENT_LENGTH || commentData.length > MAX_COMMENT_LENGTH) ?
            <button className="add-review__btn" type="submit" disabled>Post</button> :
            <button className="add-review__btn" type="submit">Post</button>}
          <button className="add-review__btn" type="button" onClick={showDetailsHandle}>{isHideDetails ? 'Показать' : 'Спрятать'}</button>
        </div>
      </div>
      {isHideDetails ? null : <div>Ваша оценка:{statRating}. Ваш коментарий: {commentData}.</div>}
    </form>
  );
}

export default AddCommentForm;
