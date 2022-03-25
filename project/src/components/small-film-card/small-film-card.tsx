
import {Film} from '../../types/films';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
    film: Film,
};

export default function SmallFilmCard({film}: SmallFilmCardProps): JSX.Element {

  return (
    <VideoPlayer autoPlay={false} film={film} />
  );
}
