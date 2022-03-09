import HeaderSignIn from '../header-sign-in/header-sign-in';
import HeaderSignOut from '../header-sign-out/header-sign-out';
import { useAppSelector } from '../../hooks';

function HeaderLogin(): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);

  return (
    <div className="user-block">
      {authorizationStatus === 'AUTH' && <HeaderSignOut />}
      {(authorizationStatus === 'NO_AUTH' || authorizationStatus === 'UNKNOWN') && <HeaderSignIn />}
    </div>
  );
}

export default HeaderLogin;
