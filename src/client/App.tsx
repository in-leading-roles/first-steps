import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppRouter from './component/AppRouter';
import { Calendar } from '../client/component/Calendar';
import { AuthContext } from './context';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import HrPanel from './pages/HrPanel';

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
  );
};

render(<App />, document.getElementById('app'));
