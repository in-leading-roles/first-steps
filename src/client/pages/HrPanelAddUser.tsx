import * as React from 'react';
import { Link, Route, Routes, Navigate, BrowserRouter, useNavigate } from 'react-router-dom';
import HrPanelNavbar from '../component/HrPanelNavbar';
import { GetUsersResponse } from 'src/common/GetUsersResponse';
import { Alert, Button, TextField } from '@mui/material';
import 'whatwg-fetch';

const HrPanelAddUser = () => {
  const [loginValue, setLogin] = React.useState('');
  const [errorDisplay, setErrorDisplay] = React.useState('none');

  const registerUser = (e: React.FormEvent) => {
    console.log(loginValue);
    fetch('/auth/registration', {
      method: 'post',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('auth')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ login: loginValue }),
    })
      .then<GetUsersResponse>((res) => res.json())
      .then((res) => {
        if (res['login']) {
          setErrorDisplay('none');
          window.location.href = "/userspanel";
        } else {
          setErrorDisplay('block');
        }
      });
  };

  return (
    <div>
      <HrPanelNavbar />
      <TextField
        label="Логин"
        onChange={(e) => {
          setLogin(e.target.value);
        }}
        type="text"
      />
      <Alert style={{ display: errorDisplay }} severity="error">
        Некорректный логин или пароль
      </Alert>
      <Button onClick={registerUser} variant="contained">
        Создать
      </Button>
    </div>
  );
};

export default HrPanelAddUser;
