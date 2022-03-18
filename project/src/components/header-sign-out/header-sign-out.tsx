import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function HeaderSignOut(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {userLoginData} = useAppSelector(({USSER_DATA}) => USSER_DATA);

  return (
    <div className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar"onClick={() => {navigate(AppRoute.MyList);}}>
          <img src={userLoginData.avatarUrl} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
            navigate(AppRoute.Root);
          }}
          to={AppRoute.Root}
        >
          Sign out
        </Link>
      </li>
    </div>
  );
}

export default HeaderSignOut;
