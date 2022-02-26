
import {Film} from '../../types/films';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
    film: Film,
};

function SmallFilmCard({film}: SmallFilmCardProps): JSX.Element {

  return (
    <VideoPlayer autoPlay={false} film={film} />
  );
}

export default SmallFilmCard;
