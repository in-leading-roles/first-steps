import * as React from 'react';
import { render } from 'react-dom';
import { Calendar } from '../client/component/Calendar';

const App = () => (
  <Calendar/>
);

render(<App />, document.getElementById('app'));
