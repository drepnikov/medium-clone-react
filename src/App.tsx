import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authFeature } from "src/features/auth/auth.feature";
import { useIsLoggedInSelector } from "src/features/auth/store/selectors";
import { TopBarComponent } from "src/shared/components/topBar/topBar.component";
import { useAppDispatch } from "src/shared/store/hooks/store.hook";
import { getCurrentUserThunk } from "src/features/auth/store/thunks/getCurrentUser.thunk";
import { globalFeedFeature } from "src/features/globalFeed/globalFeed.feature";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useIsLoggedInSelector();

  const routes = [
    authFeature.getRouter(isLoggedIn),
    globalFeedFeature.getRouter(),
  ];

  useEffect(() => {
    if (isLoggedIn === null) {
      dispatch(getCurrentUserThunk());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <TopBarComponent />
      <Routes>
        {routes}
        <Route path={"*"} element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};

export default App;
