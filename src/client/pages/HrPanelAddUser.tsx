import * as React from 'react';
import { Link, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import HrPanelNavbar from '../component/HrPanelNavbar';
import { GetUsersResponse } from 'src/common/GetUsersResponse';
import { Button, TextField } from '@mui/material';

const HrPanelAddUser = () => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');


  const handleForm = (e: React.FormEvent) => {
    // fetch('/auth/login', {
    //   method: 'post',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ login: loginValue, password: passwordValue }),
    // })
    //   .then<LoginResponse>((response) => {
    //     console.log('Get response');
    //     return response.json();
    //   })
    //   .then((response) => {
    //     if (response['token']) {
    //       setErrorDisplay('none');
    //       setIsAuth(response['token']);
    //       localStorage.setItem('auth', response['token']);
    //     } else {
    //       setErrorDisplay('block');
    //     }
    //   });
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
      <Button onClick={handleForm} variant="contained">
        Создать
      </Button>
    </div>
  );
};

export default HrPanelAddUser;
