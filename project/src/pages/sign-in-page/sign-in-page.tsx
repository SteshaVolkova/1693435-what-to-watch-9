import HeaderLogo from '../../components/header-logo/header-logo';
import Footer from '../../components/footer/footer';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function SignInPage(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [isError, setIsError] = useState<boolean>(false);
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const focusInput = () => {
    setIsError(false);
  };

  const focusPasswordInput = () => {
    setIsError(false);
    setIsPasswordError(false);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      if (loginRef.current.value !== '' && passwordRef.current.value !== '') {
        onSubmit({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        });
      } else {
        setIsError(true);
      }
    }
  };

  const hendlerPasswordValidate = () => {
    const validate = /^(?=.*\d)(?=.*[a-zA-Z]).*/;
    if (!validate.test(String(passwordRef.current?.value).toLocaleLowerCase())) {
      setIsPasswordError(true);
    }
  };

  useEffect(() => {
    if (authorizationStatus === 'AUTH') {
      navigate(AppRoute.Root);
    }
  });

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <HeaderLogo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action=""
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                onFocus={focusInput}
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                onFocus={focusPasswordInput}
                onChange={hendlerPasswordValidate}
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
            {isPasswordError && <><span>The password must not contain spaces and must contain at least one letter and number</span><br></br><br></br></>}
            {isError && <span>Fill in all fields, please!</span>}
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
