import * as React from 'react';
import { render } from 'react-dom';
import { Calendar } from '../client/component/Calendar';

const currentDate = '2018-11-01';
const schedulerData = [
  {
    startDate: '2018-11-01T09:45',
    endDate: '2018-11-01T11:00',
    title: 'Meeting',
  },
  {
    startDate: '2018-11-01T12:00',
    endDate: '2018-11-01T13:30',
    title: 'Go to a gym',
  },
  {
    startDate: '2018-11-20T12:00',
    endDate: '2018-11-30T13:30',
    title: 'FISTING ASS',
  },
];

const App = () => (
  <Calendar/>
);

render(<App />, document.getElementById('app'));
