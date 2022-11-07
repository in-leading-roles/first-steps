import * as React from 'react';
import { RolesContext } from '../context/index';
import { Navigate, Route, Routes } from 'react-router-dom';
import HrPanelAddUser from '../pages/HrPanelAddUser';
import Login from '../pages/Login';
import HrPanelUsers from '../pages/HrPanelUsers';
import HrEvents from '../pages/HrEvents';
import HrEventsAdd from '../pages/HrEventsAdd';
import UserMain from '../pages/UserMain';

const AuthRouter = () => {
  const { roles } = React.useContext(RolesContext);

  return (roles == 'HR') ? (
    <Routes>
      <Route />
      <Route path="/main" element={<Navigate to="/users" />} />
      <Route path="/login" element={<Navigate to="/users" />} />
      <Route path="" element={<Navigate to="/users" />} />
      <Route path="/users" element={<HrPanelUsers />} />
      <Route path="/users/add" element={<HrPanelAddUser />} />
      <Route path="/events" element={<HrEvents />} />
      <Route path="/events/add" element={<HrEventsAdd />} />
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
