import {FormEvent, useEffect, useRef, useState} from 'react';
import { postComment } from '../../store/api-actions';
import { Star } from '../../types/rating-stars';
import { store } from '../../store';
import {  useNavigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import React from 'react';
import { useAppSelector } from '../../hooks';
import { reviewSendStatus } from '../../store/review-send-status/review-send-status';
import { getReviewSendStatus } from '../../store/review-send-status/selectors';

const MAX_COMMENT_LENGTH = 401;
const MIN_COMMENT_LENGTH = 49;

const stars: Star[] = [
  {'id': 10},{'id': 9},{'id': 8},{'id': 7},{'id': 6},{'id': 5},{'id': 4},{'id': 3},{'id': 2},{'id': 1},
];

export default function AddCommentForm(): JSX.Element {
  const [commentData, setCommentData] = useState<string>('');
  const [starRating, setStatRating] = useState<number>(0);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const sendStatus = useAppSelector(getReviewSendStatus);
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);

  useEffect (() => () => {
    store.dispatch(reviewSendStatus('initial'));
  }, []);

  const handlerRatingChange = (rating: number) => {
    setStatRating(rating);
    checkIsDisabled();
  };

  const checkIsDisabled = () => {
    setIsDisabled(starRating === 0 || (!!textarea.current && ( textarea.current.value.length < MIN_COMMENT_LENGTH ||
      textarea.current.value.length > MAX_COMMENT_LENGTH)));
  };

  useEffect (() => {
    if (isSending && sendStatus === 'initial') {
      navigate(`${AppRoute.FilmPage}/${id}`);
    }
    setIsSending(sendStatus === 'sending');
  }, [id, isSending, navigate, sendStatus]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!isDisabled) {
      const comment  = textarea.current?.value || '';
      setCommentData(comment);
      store.dispatch(postComment({id, comment, rating: starRating}));
    }
  };

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={handleSubmit}
      style={{opacity: isSending ? 0.5 : 1}}
    >
      <div className="rating">
        <div className="rating__stars">
          {stars.map((star) => (
            <React.Fragment key={star.id}>
              <input
                onChange={() => handlerRatingChange(star.id)}
                checked={star.id === starRating}
                className="rating__input"
                id={`star-${star.id}`}
                type="radio"
                name="rating"
                value={star.id}
                disabled={isSending}
              />
              <label className="rating__label" htmlFor={`star-${star.id}`}>{`Rating ${star.id}`}</label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          ref={textarea}
          onChange={() => checkIsDisabled()}
          defaultValue={commentData}
          name="comment"
          className="add-review__textarea"
          id="review-text"
          placeholder="Review text"
          disabled={isSending}
        />
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={isDisabled || isSending}
          >
            Post
          </button>
        </div>
      </div>
      {textarea.current?.value.length}
      {sendStatus === 'error' && <span>Oops, something went wrong while submitting your review! Try later!</span>}
    </form>
  );
}
