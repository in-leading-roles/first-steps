import * as React from 'react';
import {MyAuthContext} from "../context";
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = React.useContext(MyAuthContext);

    if (isLoading) {
        return <Loader/>
    }

    return(
        isAuth
            ?
            <Routes >
                {privateRoutes.map(route =>
                    <Route
                        handle={route.component}
                        path={route.path}
                        key={route.path}
                    />
                )}
                <Navigate to='/HR'/>
            </Routes >
            :
            <Routes >
                {publicRoutes.map(route =>
                    <Route
                        handle={route.component}
                        path={route.path}
                        key={route.path}
                    />
                )}
                <Navigate to='/login'/>
            </Routes >
    );
}
export default AppRouter;