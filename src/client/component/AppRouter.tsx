import * as React from 'react';
import { MyAuthContext } from '../context';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import Loader from './UI/Loader/Loader';
import HrPanel from '../pages/HrPanel';
import Login from '../pages/Login';

const AppRouter = () => {
  // const { isAuth, isLoading } = React.useContext(MyAuthContext);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <Routes>
    <Route />
      <Route path="/hr" element={<HrPanel />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  );
};
export default AppRouter;
