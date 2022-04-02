import './error-message.css';
import { useAppSelector } from '../../hooks';
import { getError } from '../../store/store-error-data/selectors';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  if (error) {
    return (
      <div className='error-message'
        style={{
          position: 'fixed',
          top: '30px',
          right: '30px',
          padding: '10px',
          backgroundColor: '#d96666',
          color: 'white',
          borderRadius: '5px',
          zIndex: '2',
        }}
      >z
        {error}
      </div>
    );
  }

  return null;
}
