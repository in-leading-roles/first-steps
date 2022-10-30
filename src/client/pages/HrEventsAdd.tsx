import * as React from 'react';
import HrPanelNavbar from '../component/HrPanelNavbar';
import { Autocomplete, Button, TextField } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { GetUsersResponse } from 'src/common/GetUsersResponse';

const HrEventsAdd = () => {
  const [users, setUsers] = React.useState([]);

  const [titleValue, settitle] = React.useState('');
  const [contentValue, setcontent] = React.useState('');
  const [startDateValue, setstartDate] = React.useState();
  const [endDateValue, setEndDate] = React.useState();

  const handleForm = (e: React.FormEvent) => {

    // console.log(JSON.stringify({ title: titleValue, startDate: startDateValue, endDateValue:endDateValue}))

    fetch('/events', {
        method: 'post',
        headers: new Headers({
          Authorization: `Bearer ${localStorage.getItem('auth')}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({ title: titleValue, content:contentValue, startDate: startDateValue, endDate:endDateValue}),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res['title']) {
            window.location.href = "/hr/events";
          } else {
          }
        });

    e.preventDefault();
  };

  return (
    <div>
      <HrPanelNavbar />
      <TextField
        label="Название события"
        onChange={(e) => settitle(e.target.value)}
        type="text"
      />
       <TextField
          label="Описание"
          multiline
          maxRows={4}
          value={contentValue}
          onChange={(e)=>setcontent(e.target.value)}
        />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Начало события"
          value={startDateValue}
          onChange={(newValue) => {
            setstartDate(newValue);
          }}
        />
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Конец события"
          value={endDateValue}
          onChange={(newValue) => {
            setEndDate(newValue);
          }}
        />
      </LocalizationProvider>
      <Button onClick={handleForm}>Добавить</Button>
    </div>
  );
};

export default HrEventsAdd;