import React from "react";
import { render } from 'react-dom';
import Paper from '@mui/material/Paper';
import {
  Appointments,
  MonthView,
  Scheduler,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';

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

const currentDate = '2018-11-01';

export const Calendar: React.FC = () => {
  return (
    <Scheduler data={schedulerData}>
      <ViewState currentDate={currentDate} />
      <MonthView />
      <Appointments />
    </Scheduler>
  );
};
