import * as React from 'react';
import { render } from 'react-dom';
import Paper from '@mui/material/Paper';
import {
  Appointments,
  MonthView,
  Scheduler,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';

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
];

const App = () => (
  <Paper>
    <Scheduler>
      <ViewState currentDate={currentDate} />
      <MonthView />
      <Appointments />
    </Scheduler>
  </Paper>
);

render(<App />, document.getElementById('app'));
