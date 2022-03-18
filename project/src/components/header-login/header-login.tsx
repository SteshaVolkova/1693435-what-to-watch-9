import HeaderSignIn from '../header-sign-in/header-sign-in';
import HeaderSignOut from '../header-sign-out/header-sign-out';
import { useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';

function HeaderLogin(): JSX.Element {
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
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

export default HeaderLogin;
