import './error-message.css';
import { useAppSelector } from '../../hooks';
import { getError } from '../../store/store-error-data/selectors';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  if (error) {
    return (
      <div className='error-message'>
        {error}
      </div>
    );
  }

  return null;
}
