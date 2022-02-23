import {useState} from 'react';
import {Star} from '../../types/rating-stars';

type AddCommentFormProps = {
    stars: Star[],
}

function AddCommentForm({stars}: AddCommentFormProps): JSX.Element {
  const [statRating, setStatRating] = useState<null | number>(null);
  const hanldeMouseOver = (id: number) => {
    setStatRating(id);
  };

  const [commentData, setCommentData] = useState({comment: ''});
  const fieldChangeHandler = (evt) => {
    const {name, value} = evt.target;
    setCommentData({...commentData, [name]: value});
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {stars.map((star) => (
            <>
              <input className="rating__input" id={`star-${star.id}`} type="radio" name="rating" value={star.id} />
              <label onClick={() => {hanldeMouseOver(star.id);}} key={star.id} className="rating__label" htmlFor={`star-${star.id}`}>{`Rating ${star.id}`}</label>
            </>
          ))}
          {statRating}
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={fieldChangeHandler} name="comment" value={commentData.comment} className="add-review__textarea" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
        {commentData}

      </div>
    </form>
  );
}

export default AddCommentForm;
