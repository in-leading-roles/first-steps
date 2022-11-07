import * as React from 'react';
import { AuthContext, RolesContext } from '../context/index';
import { Navigate, Route, Routes } from 'react-router-dom';
import HrPanelAddUser from '../pages/HrPanelAddUser';
import Login from '../pages/Login';
import HrPanelUsers from '../pages/HrPanelUsers';
import HrEvents from '../pages/HrEvents';
import HrEventsAdd from '../pages/HrEventsAdd';
import UserMain from '../pages/UserMain';

const AuthRouter = () => {
  const { roles } = React.useContext(AuthContext);

  return (roles.includes('HR')) ? (
    <Routes>
      <Route />
      <Route path="/main" element={<Navigate to="/userspanel" />} />
      <Route path="/login" element={<Navigate to="/userspanel" />} />
      <Route path="" element={<Navigate to="/userspanel" />} />
      <Route path="/userspanel" element={<HrPanelUsers />} />
      <Route path="/userspanel/add" element={<HrPanelAddUser />} />
      <Route path="/eventspanel" element={<HrEvents />} />
      <Route path="/eventspanel/add" element={<HrEventsAdd />} />
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
