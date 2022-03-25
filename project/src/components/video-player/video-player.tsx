import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import {Film} from '../../types/films';

type VideoPlayerProps = {
    autoPlay: boolean,
    film: Film,
}

export default function VideoPlayer({autoPlay, film}: VideoPlayerProps): JSX.Element {
  const {previewVideoLink, posterImage, id, name} = film;
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const navigate = useNavigate();

  const onMouseEnterHandler = () => {
    setTimer(setTimeout(() => {
      if (!isLoading) {
        videoRef.current && videoRef.current.play();
      }
    }, 1000));
  };

  const onMouseLeaveHandler = () => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
      videoRef.current && videoRef.current.load();

    }
  };

  return (
    <article onClick={() => {navigate(`${AppRoute.FilmPage}/${id}`);}} className="small-film-card catalog__films-card" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      <div className="small-film-card__image">
        <video
          ref={videoRef}
          src={previewVideoLink}
          poster={posterImage}
          muted
          autoPlay={autoPlay}
          onLoadedData={() => {
            setIsLoading(false);
          }}
          width="100%"
          height="100%"
        >
        </video>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.FilmPage}/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}
