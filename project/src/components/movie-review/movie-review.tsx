type MovieReviewProps = {
    reviewText: string,
    reviewAuthor: string,
    reviewData: string,
    reviewRating: number
}

function MovieReview({reviewText, reviewAuthor, reviewData, reviewRating}: MovieReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{reviewText}</p>

        <footer className="review__details">
          <cite className="review__author">{reviewAuthor}</cite>
          <time className="review__date" dateTime={reviewData}>{reviewData}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{reviewRating}</div>
    </div>
  );
}

export default MovieReview;
