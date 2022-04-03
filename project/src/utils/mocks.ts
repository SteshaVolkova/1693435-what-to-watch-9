import { lorem, datatype, random, internet, name, date, vehicle } from 'faker';
import { CommentPost, Film, FilmReview } from '../types/films';
import { ReviewSendStatus, UserLoginData } from '../types/user-data';

export const makeFakeFilmComments = (): FilmReview[] => ({
  comments: new Array(3).fill(null).map(() => ({
    comment: datatype.string,
    date: date.between,
    id: datatype.number,
    rating: datatype.float({ min: 1, max: 10 }),
    user: {
      id: datatype.number,
      name: name.findName,
    },
  })),
} as unknown as FilmReview[]);

export const makeFilmEmptyItem = (): Film => ({
  id: 0,
  name: '',
  posterImage: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  previewVideoLink: '',
  description: '',
  rating: 0,
  scoresCount: 0,
  director: '',
  starring: [''],
  runTime: 0,
  genre: '',
  released: 0,
  isFavorite: false,
} as Film);

export const makeFakeFilmsItem = (): Film => ({
  id: datatype.number,
  name: random.word,
  posterImage: random.image,
  previewImage: random.image,
  backgroundImage: random.image,
  backgroundColor: internet.color,
  videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  previewVideoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  description: lorem.text,
  rating: datatype.float({ min: 1, max: 10 }),
  scoresCount: datatype.number,
  director: name.findName,
  starring: [name.findName],
  runTime: datatype.float({ min: 30 }),
  genre: random.word,
  released: datatype.float({ min: 1800 }),
  isFavorite: datatype.boolean,
} as unknown as Film);

export const makeUserEmptyData = (): CommentPost => ({
  id: 0,
  comment: '',
  rating: 0,
} as unknown as CommentPost);

export const makeUserData = (): CommentPost => ({
  id: datatype.number,
  comment: datatype.string,
  rating: datatype.float({ min: 1, max: 10 }),
} as unknown as CommentPost);

export const makeUserEmptyLoginData = (): UserLoginData => ({
  avatarUrl: '',
  email: '',
  id: 0,
  name: '',
  token: '',
} as UserLoginData);

export const makeFakeUserLoginData = (): UserLoginData => ({
  avatarUrl: random.image,
  email: internet.email,
  id: datatype.number,
  name: name.findName,
  token: vehicle.vin,
} as unknown as UserLoginData);

export const makeFakeGenre = (): string => ({
  selectedGenre: random.word,
} as unknown as string);

export const makeFakeStoreError = (): string => ({
  selectedGenre: random.word,
} as unknown as string);

export const makeReviewSendStatusInitial = (): ReviewSendStatus => ({
  reviewSendStatusItem: 'initial',
} as unknown as ReviewSendStatus);

export const makeReviewSendStatusSending = (): ReviewSendStatus => ({
  reviewSendStatusItem: 'sending',
} as unknown as ReviewSendStatus);

export const makeReviewSendStatusError = (): ReviewSendStatus => ({
  reviewSendStatusItem: 'error',
} as unknown as ReviewSendStatus);
