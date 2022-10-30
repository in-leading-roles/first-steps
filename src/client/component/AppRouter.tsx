import * as React from 'react';
import { AuthContext, RolesContext } from '../context/index';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import Loader from './UI/Loader/Loader';
import HrPanelAddUser from '../pages/HrPanelAddUser';
import Login from '../pages/Login';
import { Redirect } from '@nestjs/common';
import HrPanelUsers from '../pages/HrPanelUsers';
import HrEvents from '../pages/HrEvents';
import HrEventsAdd from '../pages/HrEventsAdd';
import UserMain from '../pages/UserMain';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
  const { isAuth, isLoading } = React.useContext(AuthContext);
  const { roles } = React.useContext(RolesContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <div>
      <AuthRouter />
    </div>
  ) : (
    <div>
      <Routes>
        <Route />
        <Route path="" element={<Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Navigate to="/login" replace={true} />
    </div>
  );
};
export default AppRouter;
