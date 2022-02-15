import MoviePageTopBlock from '../../components/movie-page-top-block/movie-page-top-block';
import MovieReview from '../../components/movie-review/movie-review';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import FilmNavigationItem from '../../components/film-navigation-item/film-navigation-item';
import Footer from '../../components/footer/footer';

type MoviePageReviewsProps = {
  filmCardSrc: string,
  filmCardTitle: string,
  filmCardGenre: string,
  filmCardYear: number
};

function MoviePageReviews({filmCardSrc ,filmCardTitle, filmCardGenre, filmCardYear}: MoviePageReviewsProps): JSX.Element {
  return (
    <>
      <section className="film-card film-card--full">
        <MoviePageTopBlock filmCardSrc={filmCardSrc} filmCardTitle={filmCardTitle} filmCardGenre={filmCardGenre} filmCardYear={filmCardYear} />

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={filmCardSrc} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <FilmNavigationItem className={'film-nav__item film-nav__item--active'} filmNavLink={'/overview'} filmNavTitle={'Overview'} />
                  <FilmNavigationItem className={'film-nav__item'} filmNavLink={'/details'} filmNavTitle={'Details'} />
                  <FilmNavigationItem className={'film-nav__item'} filmNavLink={'/review'} filmNavTitle={'Reviews'} />
                </ul>
              </nav>

              <div className="film-card__reviews film-card__row">
                <div className="film-card__reviews-col">
                  <MovieReview
                    reviewText={'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.'}
                    reviewAuthor={'Kate Muir'}
                    reviewData={'December 24, 2016'}
                    reviewRating={8.9}
                  />

                  <MovieReview
                    reviewText={'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. \'The Grand Budapest Hotel\' is no different, except that he has added a hint of gravitas to the mix, improving the recipe.'}
                    reviewAuthor={'Bill Goodykoontz'}
                    reviewData={'November 18, 2015'}
                    reviewRating={8.0}
                  />

                  <MovieReview
                    reviewText={'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.'}
                    reviewAuthor={'Amanda Greever'}
                    reviewData={'November 18, 2015'}
                    reviewRating={8.0}
                  />
                </div>
                <div className="film-card__reviews-col">
                  <MovieReview
                    reviewText={'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.'}
                    reviewAuthor={'Matthew Lickona'}
                    reviewData={'2016-12-20'}
                    reviewRating={7.2}
                  />

                  <MovieReview
                    reviewText={'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.'}
                    reviewAuthor={'Paula Fleri-Soler'}
                    reviewData={'December 20, 2016'}
                    reviewRating={7.6}
                  />

                  <MovieReview
                    reviewText={'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.'}
                    reviewAuthor={'Paula Fleri-Soler'}
                    reviewData={'December 20, 2016'}
                    reviewRating={7.0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <SmallFilmCard smallFilmCardSrc={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'} smallFilmCardName={'Fantastic Beasts: The Crimes of Grindelwald'} />

            <SmallFilmCard smallFilmCardSrc={'img/bohemian-rhapsody.jpg'} smallFilmCardName={'Bohemian Rhapsody'} />

            <SmallFilmCard smallFilmCardSrc={'img/macbeth.jpg'} smallFilmCardName={'Macbeth'} />

            <SmallFilmCard smallFilmCardSrc={'img/aviator.jpg'} smallFilmCardName={'Aviator'} />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MoviePageReviews;
