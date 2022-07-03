import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { TopBarComponent } from "src/shared/components/topBar/topBar.component";

import { globalFeedFeature } from "src/features/globalFeed/globalFeed.feature";
import { authFeature } from "src/features/auth/auth.feature";
import { useRecoverSessionEffect } from "src/features/auth/hooks/useRecoverSessionEffect";
import { LoadingComponent } from "src/shared/components/loading/loading.component";

const App: React.FC = () => {
  const { isLoggedIn } = useRecoverSessionEffect();

  const routes = [authFeature.router(isLoggedIn), globalFeedFeature.router()];

  if (isLoggedIn === null) return <LoadingComponent />;

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
