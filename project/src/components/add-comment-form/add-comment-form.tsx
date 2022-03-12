import { FormEvent, useEffect, useState } from 'react';
import { fetchCommentsAction, postComment } from '../../store/api-actions';
import { Star } from '../../types/rating-stars';
import { CommentPost } from '../../types/films';
import { store } from '../../store';
import { useNavigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';

const MAX_COMMENT_LENGTH = 400;
const MIN_COMMENT_LENGTH = 50;

function AddCommentForm(): JSX.Element {
  const stars: Star[] = [
    {'id': 10},{'id': 9},{'id': 8},{'id': 7},{'id': 6},{'id': 5},{'id': 4},{'id': 3},{'id': 2},{'id': 1},
  ];

  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);
  useEffect(() => {
    store.dispatch(fetchCommentsAction(id));
  }, [id]);

  const [statRating, setStatRating] = useState<number>(0);
  const hanldeMouseOver = (starId: number) => {
    setStatRating(starId);
  };

  const [commentData, setCommentData] = useState('');
  const fieldChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const enteredName = event.target.value;
    setCommentData(enteredName);
  };

  const onSubmit = ({comment, rating}: CommentPost) => {
    store.dispatch(postComment({id, comment, rating}));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (statRating !== 0 || commentData !== '') {
      onSubmit({
        id: id,
        rating: statRating,
        comment: commentData,
      });
      navigate(`${AppRoute.FilmPage}/${id}`);
    }
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
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
          {(statRating === null || commentData === '' || commentData.length < MIN_COMMENT_LENGTH || commentData.length > MAX_COMMENT_LENGTH) ?
            <button className="add-review__btn" type="submit" disabled>Post</button> :
            <button className="add-review__btn" type="submit">Post</button>}
        </div>
      </div>
    </form>
  );
}

export default AddCommentForm;
