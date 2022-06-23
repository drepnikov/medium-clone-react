import { Fragment } from "react";
import { Navigate, Route } from "react-router-dom";
import { LoginComponent } from "src/features/auth/components/login/login.component";
import { RegisterComponent } from "src/features/auth/components/register/register.component";
import { PathsEnum } from "src/shared/types/paths.enum";
import { FeatureInterface } from "src/types";

export class AuthFeature implements FeatureInterface {
  router(isLoggedIn: boolean | null) {
    return (
      <Fragment key={"auth"}>
        <Route
          path={PathsEnum.register}
          element={isLoggedIn ? <Navigate to={"/"} /> : <RegisterComponent />}
        />
        <Route
          path={PathsEnum.login}
          element={isLoggedIn ? <Navigate to={"/"} /> : <LoginComponent />}
        />
      </Fragment>
    );
  }
}

export const authFeature = new AuthFeature();
