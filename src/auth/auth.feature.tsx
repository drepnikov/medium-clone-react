import { Navigate, Route } from "react-router-dom";
import { Register } from "src/auth/components/register/register.component";

class AuthFeature {
  getRouter() {
    return (
      <Route key={"/auth"} path={"/auth"}>
        <Route index element={<Navigate to={"register"} />} />
        <Route path={"register"} element={<Register />} />
        <Route path={"login"} element={<>Страница логина</>} />
      </Route>
    );
  }
}

export const authFeature = new AuthFeature();
