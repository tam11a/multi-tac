import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import NoPage from "./NoPage";
import Splash from "./Splash";
import useToken from "./../utilities/useToken";

const PageRoute = () => {
  // primary token
  const { token, setToken } = useToken();

  const Protected = (children) => {
    return token ? children : <Navigate to="/" />;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash setToken={setToken} />} />
          <Route
            path="/home"
            element={
              <Protected>
                <Home setToken={setToken} />
              </Protected>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PageRoute;
