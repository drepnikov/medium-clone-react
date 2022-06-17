import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authFeature } from "src/auth/auth.feature";
import { useIsLoggedInSelector } from "src/auth/store/selectors";

const App: React.FC = () => {
  const isLoggedIn = useIsLoggedInSelector();

  const routes = [authFeature.getRouter(isLoggedIn)];

  return (
    <Routes>
      <Route path={"/"}>
        <Route index element={<div>Главная страница</div>} />
        {routes}
        <Route path={"*"} element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
};

export default App;
