import * as React from 'react';
import { MyAuthContext } from '../context';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import Loader from './UI/Loader/Loader';
import HrPanel from '../pages/HrPanel';

const AppRouter = () => {
  const { isAuth, isLoading } = React.useContext(MyAuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
        <Route path="/" element={ <HrPanel/> } />
    </div>
  );
};
export default AppRouter;
