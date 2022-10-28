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

const currentDate = '2022-01-15';

let schedulerData = [
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

export const Calendar: React.FC = () => {
    const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    fetch('/users/getevents/1', {
        method: 'GET',
        headers: new Headers({
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZXMiOlsiSFIiXSwiaWF0IjoxNjY2OTk5Njk5fQ.T5kZHIb0iJtuUJC92t6JGR3Sr-ome9jKzEqAoZQMm7U`,
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
