import { FormEvent, useEffect, useState } from 'react';
import { postComment } from '../../store/api-actions';
import { Star } from '../../types/rating-stars';
import { store } from '../../store';
import {  useNavigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import React from 'react';
import { useAppSelector } from '../../hooks';
import { reviewSendStatus } from '../../store/action';

const MAX_COMMENT_LENGTH = 400;
const MIN_COMMENT_LENGTH = 50;

const stars: Star[] = [
  {'id': 10},{'id': 9},{'id': 8},{'id': 7},{'id': 6},{'id': 5},{'id': 4},{'id': 3},{'id': 2},{'id': 1},
];

function AddCommentForm(): JSX.Element {
  const [commentData, setCommentData] = useState<string>('');
  const [starRating, setStatRating] = useState<number>(0);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const sendStatus = useAppSelector((state) => state.reviewSendStatus);

  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);

  useEffect (() => {
    return () => {
      store.dispatch(reviewSendStatus('initial'));
    };

    return;
  }, []);

  useEffect (() => {
    setIsDisabled(
      starRating === 0 ||
      commentData.length < MIN_COMMENT_LENGTH ||
      commentData.length > MAX_COMMENT_LENGTH,
    );
  }, [starRating, commentData]);

  useEffect (() => {
    if (isSending && sendStatus === 'initial') {
      navigate(`${AppRoute.FilmPage}/${id}`);
    }
    setIsSending(sendStatus === 'sending');
  }, [id, isSending, navigate, sendStatus]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!isDisabled) {
      store.dispatch(postComment({id, comment: commentData, rating: starRating}));
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
                onChange={() => setStatRating(star.id)}
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
          onChange={({target}) => setCommentData(target.value)}
          value={commentData}
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

export default AddCommentForm;
