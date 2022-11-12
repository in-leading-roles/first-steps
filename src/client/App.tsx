import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppRouter from './component/AppRouter';
import { AuthContext } from './context';

const App = () => {
  const [isAuth, setIsAuth] = React.useState(null);
  const [roles, setRoles] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
      console.log('IsAuth', true);
    } else {
      setIsAuth(false);
      console.log('IsAuth', false);
    }
    setRoles(localStorage.getItem('roles'));
    console.log(localStorage.getItem('roles'));
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        roles,
        setRoles,
        isLoading,
      }}
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

render(<App />, document.getElementById('app'));
