import HeaderSignIn from '../header-sign-in/header-sign-in';
import HeaderSignOut from '../header-sign-out/header-sign-out';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

export default function HeaderLogin(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <div className="user-block">
      {authorizationStatus === 'AUTH' ? <HeaderSignOut /> : <HeaderSignIn />}
    </div>
  );
}
