import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {Film} from '../../types/films';

type VideoPlayerProps = {
    autoPlay: boolean,
    film: Film,
}

function VideoPlayer({autoPlay, film}: VideoPlayerProps): JSX.Element {
  const {previewVideoLink, posterImage, id, name} = film;

  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [previewVideoLink]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }, [isPlaying]);

  return (
    <button className="small-film-card catalog__films-card" type="button" disabled={isLoading} onMouseEnter={() => setTimeout(() => setIsPlaying(!isPlaying), 1000)} onMouseLeave={() => setIsPlaying(!isPlaying)}>
      <div className="small-film-card__image">
        <video ref={videoRef} src={previewVideoLink} poster={posterImage} width="100%" height="100%"></video>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </button>
  );
}

export default VideoPlayer;
