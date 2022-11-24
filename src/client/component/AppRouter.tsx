import * as React from 'react';
import { AuthContext } from '../context/index';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from './UI/Loader/Loader';
import Login from '../pages/Login/Login';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
  const { isAuth, isLoading } = React.useContext(AuthContext);

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
        <Route path="/login" element={<Login />} />
      </Routes>
      <Navigate to="/login" replace={true} />
    </div>
  );
};
export default AppRouter;
