import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppRouter from './component/AppRouter';
import { Calendar } from '../client/component/Calendar';
import { MyAuthContext } from './context';
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
    <BrowserRouter>
    <AppRouter/>
  </BrowserRouter>
  );

  // return <Calendar />;
};

render(<App />, document.getElementById('app'));
