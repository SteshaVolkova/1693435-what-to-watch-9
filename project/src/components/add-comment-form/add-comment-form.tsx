import  './add-comment-form.css';
import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { postComment } from '../../store/api-actions';
import {  useNavigate, useParams } from 'react-router-dom';
import { AppRoute, MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH, stars } from '../../const';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { reviewSendStatus } from '../../store/review-send-status/review-send-status';
import { getReviewSendStatus } from '../../store/review-send-status/selectors';

export default function AddCommentForm(): JSX.Element {
  const [commentData, setCommentData] = useState<string>('');
  const [starRating, setStarRating] = useState<number>(0);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const textarea = useRef<HTMLTextAreaElement>(null);
  const sendStatus = useAppSelector(getReviewSendStatus);
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);

  useEffect (() => () => {
    dispatch(reviewSendStatus('initial'));
  }, [dispatch]);

  const handleRatingChange = (rating: number) => {
    setStarRating(rating);
  };

  const handleCheckIsDisabled = useCallback((() => {
    setIsDisabled(starRating === 0 || (!!textarea.current && ( textarea.current.value.length < MIN_COMMENT_LENGTH ||
      textarea.current.value.length > MAX_COMMENT_LENGTH)));
  }), [starRating]);

  useEffect(() => {
    handleCheckIsDisabled();
  }, [handleCheckIsDisabled]);

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
      dispatch(postComment({id, comment, rating: starRating}));
    }
  };

  return (
    <form
      action="#"
      className={`add-review__form ${isSending ? ' add-review__form-disabled' : ''}`}
      onSubmit={handleSubmit}
    >
      <div className="rating">
        <div className="rating__stars">
          {stars.map((star) => (
            <React.Fragment key={star.id}>
              <input
                onChange={() => handleRatingChange(star.id)}
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
          onChange={() => handleCheckIsDisabled()}
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
      {sendStatus === 'error' && <span>Oops, something went wrong while submitting your review! Try later!</span>}
    </form>
  );
}
