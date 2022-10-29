import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppRouter from './component/AppRouter';
import { Calendar } from '../client/component/Calendar';
import { MyAuthContext } from './context';

const App = () => {
  // const [isAuth, setIsAuth] = React.useState(false);
  // const [isLoading, setLoading] = React.useState(true);

  // React.useEffect(() => {
  //   if (localStorage.getItem('auth')) {
  //     setIsAuth(true);
  //   }
  //   setLoading(false);
  // }, []);

  // return (
  //   <Switch>
  //     <Route path="/article/:name">
  //       <Article />
  //     </Route>
  //     <Route path="/article">
  //       <ArticleList />
  //     </Route>
  //   </Switch>
  // );

  return <Calendar />;
};

render(<App />, document.getElementById('app'));
