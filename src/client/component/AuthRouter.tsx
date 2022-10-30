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

const AuthRouter = () => {
  const { roles } = React.useContext(RolesContext);

  return (roles == 'HR') ? (
    <Routes>
      <Route />
      <Route path="/main" element={<Navigate to="/hr/users/view" />} />
      <Route path="/login" element={<Navigate to="/hr/users/view" />} />
      <Route path="" element={<Navigate to="/hr/users/view" />} />
      <Route path="/hr/users/view" element={<HrPanelUsers />} />
      <Route path="/hr/users/add" element={<HrPanelAddUser />} />
      <Route path="/hr/events" element={<HrEvents />} />
      <Route path="/hr/events/add" element={<HrEventsAdd />} />
    </Routes>
  ) : (
    <div>
      <Routes>
        <Route />
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<UserMain />} />
      </Routes>
      <Navigate to="/main" replace={true} />
    </div>
  );
};

export default AuthRouter;
