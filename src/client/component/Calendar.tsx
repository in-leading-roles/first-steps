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

  React.useEffect(() => {
    fetch('/events', {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('auth')}`,
      }),
    })
      .then<GetUserEventsResponse>((res) => { 
        return res.json() 
      })
      .then(async (res: Promise<any>) => {
        console.log()
        // setEvents([...await res])
        return [...await res];
      })
      .then((resource) => {
        console.log("events1", resource);
        fetch('/regular-events/plannedevents', {
          method: 'GET',
          headers: new Headers({
            Authorization: `Bearer ${localStorage.getItem('auth')}`,
          }),
        }).then<GetUserEventsResponse>((res) => res.json())
          .then(async (res) => {
            console.log("events2", events);
            setEvents([...resource, ...await res]);
          });
      });



  }, []);

  return (
    <Scheduler data={events}>
      <ViewState currentDate={currentDate} />
      <MonthView />
      <Appointments />
    </Scheduler>
  );
};
