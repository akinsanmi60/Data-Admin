import DashboardPage from "pages/adminDashboard";
import AppLayout from "pages/App";
import ErrorPage from "pages/error/error";
import Unauthorized from "pages/error/unauthorized";
import LoginPage from "pages/loginPage";
import ResetFormPage from "pages/resetPassword";
import VerifyPage from "pages/verifyPage";
import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ROUTESWITHLAYER from "Routes";

function Wrapper() {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <div>
      <Wrapper />
      <React.Suspense fallback="loading">
        <Routes>
          {/** Permission denied route */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/reset_password" element={<ResetFormPage />} />
          <Route path="/verify_account" element={<VerifyPage />} />

          <Route path="/auth_profile" element={<AppLayout />}>
            <Route index element={<DashboardPage />} />
            {Object.entries(ROUTESWITHLAYER).map(appRoute => {
              const [key, value] = appRoute;
              const AppRouteComponent = value.element;
              return (
                <Route
                  key={key}
                  path={value.path}
                  element={<AppRouteComponent />}
                />
              );
            })}
          </Route>
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
