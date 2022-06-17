import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authFeature } from "src/auth/auth.feature";

const App: React.FC = () => {
  const routes = [authFeature.getRouter()];

  return (
    <Routes>
      <Route path={"/"}>
        <Route index element={<Navigate to={"/auth/register"} />} />
        {routes}
      </Route>
    </Routes>
  );
};

export default App;
