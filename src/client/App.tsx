import * as React from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './component/AppRouter';
import { Calendar } from '../client/component/Calendar';
import {MyAuthContext} from "./context";

const App = () => {
  const [isAuth, setIsAuth] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  return (
    <MyAuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </MyAuthContext.Provider>
  );

  return <Calendar />;
};

render(<App />, document.getElementById('app'));
