import * as React from 'react';
import { render } from 'react-dom';
import Paper from '@mui/material/Paper';
import {
  Appointments,
  MonthView,
  Scheduler,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { GetUserEventsResponse } from 'src/common/GetUserEventsResponse';

let now = Date()
const currentDate = Date();

export const Calendar: React.FC = () => {
    const [events, setEvents] = React.useState([]);

  // React.useEffect(() => {
  //   fetch('/users/getevents/1', {
  //       method: 'GET',
  //       headers: new Headers({
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZXMiOlsiSFIiXSwiaWF0IjoxNjY2OTk5Njk5fQ.T5kZHIb0iJtuUJC92t6JGR3Sr-ome9jKzEqAoZQMm7U`,
  //       }),
  //   })
  //     .then<GetUserEventsResponse>((res) => res.json())
  //     .then(async (res) => setEvents(await res));
  // }, []);

  React.useEffect(() => {
    fetch('/events', {
        method: 'GET',
        headers: new Headers({
          Authorization: `Bearer ${localStorage.getItem('auth')}`,
        }),
    })
      .then<GetUserEventsResponse>((res) => res.json())
      .then(async (res) => setEvents(await res));
  }, []);

  return (
    <Scheduler data={events}>
      <ViewState currentDate={currentDate} />
      <MonthView />
      <Appointments />
    </Scheduler>
  );
};
