import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authFeature } from "src/auth/auth.feature";
import { useIsLoggedInSelector } from "src/auth/store/selectors";
import { TopBar } from "src/shared/components/topBar/topBar.component";
import { useAppDispatch } from "src/shared/store/hooks/store.hook";
import { getCurrentUserThunk } from "src/auth/store/thunks/getCurrentUser.thunk";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useIsLoggedInSelector();
  const routes = [authFeature.getRouter(isLoggedIn)];

  useEffect(() => {
    if (isLoggedIn === null) {
      dispatch(getCurrentUserThunk());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <TopBar />
      <Routes>
        <Route path={"/"}>
          <Route index element={<div>Главная страница</div>} />
          {routes}
          <Route path={"*"} element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
