import { Fragment } from "react";
import { Navigate, Route } from "react-router-dom";
import { LoginComponent } from "src/features/auth/components/login/login.component";
import { RegisterComponent } from "src/features/auth/components/register/register.component";

export class AuthFeature {
  static PATHS = {
    register: "/auth/register",
    login: "/auth/login",
  };

  getRouter(isLoggedIn: boolean | null) {
    return (
      <Fragment key={"auth"}>
        <Route
          path={AuthFeature.PATHS.register}
          element={isLoggedIn ? <Navigate to={"/"} /> : <RegisterComponent />}
        />
        <Route
          path={AuthFeature.PATHS.login}
          element={isLoggedIn ? <Navigate to={"/"} /> : <LoginComponent />}
        />
      </Fragment>
    );
  }
}

export const authFeature = new AuthFeature();
