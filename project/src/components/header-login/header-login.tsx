import HeaderSignIn from '../header-sign-in/header-sign-in';
import HeaderSignOut from '../header-sign-out/header-sign-out';
import { useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

export default function HeaderLogin(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect (() => {
    setIsAuth(authorizationStatus === 'AUTH');
  }, [authorizationStatus]);

  return (
    <div className="user-block">
      {isAuth ? <HeaderSignOut /> : <HeaderSignIn />}
    </div>
  );
}
