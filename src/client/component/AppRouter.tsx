import * as React from 'react';
import { AuthContext } from '../context/index';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import Loader from './UI/Loader/Loader';
import HrPanelAddUser from '../pages/HrPanelAddUser';
import Login from '../pages/Login';
import { Redirect } from '@nestjs/common';
import HrPanelUsers from '../pages/HrPanelUsers';
import HrEvents from '../pages/HrEvents';
import HrEventsAdd from '../pages/HrEventsAdd';

const AppRouter = () => {
  const { isAuth, isLoading } = React.useContext(AuthContext);
  console.log(isAuth);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <div>
      <Routes>
        <Route />
        <Route path="/hr/users/view" element={<HrPanelUsers />} />
        <Route path="/hr/users/add" element={<HrPanelAddUser />} />
        <Route path="/hr/events" element={<HrEvents />} />
        <Route path="/hr/events/add" element={<HrEventsAdd />} />
        <Route path="/login" element={<Navigate to="/hr/users/view" />} />
        <Route path="" element={<Navigate to="/hr/users/view" />} />
      </Routes>
    </div>
  ) : (
    <div>
      <Routes>
        <Route />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
        <Navigate to="/login" replace={true} />
    </div>
  );
};
export default AppRouter;
