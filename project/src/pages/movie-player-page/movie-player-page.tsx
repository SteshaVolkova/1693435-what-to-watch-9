import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';
import { getFilmsList, getFilmsLoadedDataStatus } from '../../store/films-data/selectors';


export default function MoviePlayer(): JSX.Element {
  const films = useAppSelector(getFilmsList);
  const isDataLoadedFilm = useAppSelector(getFilmsLoadedDataStatus);

  const [isActive, setIsActive] = useState(true);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const params = useParams();
  const filmId = Number(params.id);
  const film = films[filmId - 1];
  const {videoLink} = film;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const getRemainingTime = (runTimeItem: number, currentTimeItem: number) => new Date(((runTimeItem * 60) - currentTimeItem) * 1000).toISOString().substr(11, 8).toString();

  const getRemainingPercent = (runTimeItem: number, currentTimeItem: number) => ((currentTimeItem * 100) / (runTimeItem * 60)).toFixed(3);

  useEffect(() => {
    if (isActive) {
      if (videoRef.current) {
        videoRef.current.play();
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  const handlePlayFilm = () => {
    setIsActive(!isActive);
  };

  const handleFullScreen = () => {
    videoRef.current?.requestFullscreen();
  };

  if (!isDataLoadedFilm) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={videoLink}
        className="player__video"
        onTimeUpdate={(evt) => setCurrentTime(Math.round(evt.currentTarget.currentTime))}
      >
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={() => {
          videoRef.current?.pause();
          window.history.back();
        }}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={getRemainingPercent(film.runTime, currentTime)}
              max="100"
            >
            </progress>
            <div className="player__toggler" style ={{left: `${getRemainingPercent(film.runTime, currentTime)}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getRemainingTime(film.runTime, currentTime)}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={() => {handlePlayFilm();}}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              {isActive ? <use xlinkHref="#pause"></use> : <use xlinkHref="#play-s"></use>}
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={() => {handleFullScreen();}}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
