import * as React from "react";
import { Link } from "react-router-dom";
import {
  useCurrentsUserSelector,
  useIsAnonymousSelector,
  useIsLoggedInSelector,
} from "src/features/auth/store/selectors";
import { PATHS } from "src/config/paths";

interface ITopBarComponentProps {}

const TopBarComponent: React.FC<ITopBarComponentProps> = () => {
  const isLoggedIn = useIsLoggedInSelector();
  const isAnonymous = useIsAnonymousSelector();
  const currentsUser = useCurrentsUserSelector();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          medium
        </Link>
        <ul className={"nav navbar-nav pull-xs-right"}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          {isLoggedIn && currentsUser && (
            <>
              <li className="nav-item">
                <Link to="/articles/new" className="nav-link">
                  <i className="ion-compose"></i> New Post
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/settings" className="nav-link">
                  <i className="ion-gear-a"></i> Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={PATHS.profile(currentsUser.username)}
                  className="nav-link"
                >
                  {currentsUser.image && (
                    <img
                      className="user-pic"
                      src={currentsUser.image || ""}
                      alt={"avatar"}
                    ></img>
                  )}{" "}
                  {currentsUser.username}
                </Link>
              </li>
            </>
          )}

          {isAnonymous && (
            <>
              <li className="nav-item">
                <Link to={PATHS.login} className="nav-link">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link to={PATHS.register} className="nav-link">
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export { TopBarComponent };
