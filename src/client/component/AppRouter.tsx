import * as React from 'react';
import {AuthContext} from '../context/index';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import Loader from './UI/Loader/Loader';
import HrPanel from '../pages/HrPanel';
import Login from '../pages/Login';
import { Redirect } from '@nestjs/common';

const AppRouter = () => {
  
  const { isAuth, isLoading } = React.useContext(AuthContext);
  console.log(isAuth);

  if (isLoading) {
    return <Loader />;
  }

  return (
    isAuth
    ?
    <div>
      <Routes>
        <Route />
        <Route path="/hr" element={<HrPanel />} />
      </Routes>
      <Navigate to="/hr" replace={true} />
    </div>
    :
    <div>
      <Routes>
        <Route />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Navigate to="/login" replace={true} />
    </div>
  );
};
export default AppRouter;
