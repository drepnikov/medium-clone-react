import { Register } from "src/features/auth/components/register/register.component";
import { Navigate, Route } from "react-router-dom";
import { Login } from "src/features/auth/components/login/login.component";

class AuthFeature {
  getRouter(isLoggedIn: boolean | null) {
    return (
      <Route key={"/auth"} path={"/auth"}>
        <Route index element={<Navigate to={"register"} />} />
        <Route
          path={"register"}
          element={isLoggedIn ? <Navigate to={"/"} /> : <Register />}
        />
        <Route
          path={"login"}
          element={isLoggedIn ? <Navigate to={"/"} /> : <Login />}
        />
      </Route>
    );
  }
}

export const authFeature = new AuthFeature();
