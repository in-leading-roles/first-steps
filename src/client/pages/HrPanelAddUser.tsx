import * as React from 'react';
import { Link, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import HrPanelNavbar from '../component/HrPanelNavbar';
import { GetUsersResponse } from 'src/common/GetUsersResponse';
import { Alert, Button, TextField } from '@mui/material';

const HrPanelAddUser = () => {
  const [loginValue, setLogin] = React.useState('');
  const [user, setUser] = React.useState();
  const [errorDisplay, setErrorDisplay] = React.useState('none');

  const handleForm = (e: React.FormEvent) => {
    fetch('/auth/registration', {
      method: 'post',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('auth')}`,
      }),
      body: JSON.stringify({ login: loginValue }),
    })
      .then((response) => {
        console.log('Get response');
        return response.json();
      })
      .then((response) => {
        if (response['login']) {
          setErrorDisplay('none');
          // return <Navigate to="/hr/users/add" replace={true} />;
        } else {
          setErrorDisplay('block');
        }
      });
    e.preventDefault();
  };

  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch('/users', {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('auth')}`,
      }),
    })
      .then<GetUsersResponse>((res) => res.json())
      .then(async (res) => setUsers(await res));
  }, []);

  return (
    <div>
      <HrPanelNavbar />
      <TextField
        label="Логин"
        onChange={(e) => setLogin(e.target.value)}
        type="text"
      />
      <Alert style={{ display: errorDisplay }} severity="error">
        Некорректный логин или пароль
      </Alert>
      <Button onClick={handleForm} variant="contained">
        Создать
      </Button>
    </div>
  );
};

export default HrPanelAddUser;
