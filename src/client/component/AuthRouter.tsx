import * as React from 'react';
import { AuthContext } from '../context/index';
import { Navigate, Route, Routes } from 'react-router-dom';
import HrPanelAddUser from '../pages/Hr/Users/UsersPanelScreen/UsersPanel';
import Login from '../pages/Login/Login';
import HrPanelUsers from '../pages/Hr/Users/AddUser';
import HrEvents from '../pages/Hr/Events/EventsPanel';
import HrEventsAdd from '../pages/Hr/Events/AddEvent';
import UserMain from '../pages/User/UserMain';

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
