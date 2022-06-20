import { Register } from "src/features/auth/components/register/register.component";
import { Navigate, Route } from "react-router-dom";
import { Login } from "src/features/auth/components/login/login.component";

export class AuthFeature {
  static PATHS = {
    auth: "/auth",
    register: "/auth/register",
    login: "/auth/login",
  };

  getRouter(isLoggedIn: boolean | null) {
    return (
      <>
        <Route
          path={AuthFeature.PATHS.register}
          element={
            isLoggedIn ? <Navigate to={AuthFeature.PATHS.auth} /> : <Register />
          }
        />
        <Route
          path={AuthFeature.PATHS.login}
          element={
            isLoggedIn ? <Navigate to={AuthFeature.PATHS.auth} /> : <Login />
          }
        />
      </>
    );
  }
}

export const authFeature = new AuthFeature();
