import React, { useContext } from "react";
import { Routes as Router, Route, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { Login } from "../pages/login";
import { Home } from "../pages/home";
import { SingIn } from "../pages/singin";
import { Truck } from "../pages/truck";

type Props = {};

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) return <Navigate to="/" replace />;

  return <Outlet />;
};

const Routes = (props: Props) => {
  const { authenticated } = useContext(AuthContext);

  return (
    <Router>
      <Route path="/" element={<Login />} />
      <Route path="/singIn" element={<SingIn />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/truck" element={<Truck />} />
      </Route>
    </Router>
  );
};

export default Routes;
