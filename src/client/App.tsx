import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppRouter from './component/AppRouter';
import { AuthContext, RolesContext } from './context';

const App = () => {
  const [isAuth, setIsAuth] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);
  const [roles, setRoles] = React.useState(null);

  React.useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }else{
      setIsAuth(false);
    }
    if (localStorage.getItem('roles')) {
      setRoles(localStorage.getItem('roles'));
    }
    setLoading(false);
  }, []);

  return (
    <RolesContext.Provider
      value={{
        roles,
        setRoles,
      }}
    >
      <AuthContext.Provider
        value={{
          isAuth,
          setIsAuth,
          isLoading,
        }}
      >
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </RolesContext.Provider>
  );
};

render(<App />, document.getElementById('app'));
