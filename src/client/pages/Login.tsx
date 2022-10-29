import { WindowSharp } from '@mui/icons-material';
import { Box, Button, TextField, Alert } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginResponse } from 'src/common/LoginResponse';
import { AuthContext } from '../context';
import 'whatwg-fetch';

const Login = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);
  const [loginValue, setLogin] = React.useState('');
  const [passwordValue, setPassword] = React.useState('');
  const [errorDisplay, setErrorDisplay] = React.useState('none');

  const handlePostForm = (e: React.FormEvent) => {
    fetch('/auth/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login: loginValue, password: passwordValue }),
    })
      .then<LoginResponse>((response) => {
        console.log('Get response');
        return response.json();
      })
      .then((response) => {
        if (response['token']) {
          setErrorDisplay('none');
          setIsAuth(response['token']);
          localStorage.setItem('auth', response['token']);
        } else {
          setErrorDisplay('block');
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <TextField
        label="Логин"
        onChange={(e) => setLogin(e.target.value)}
        type="text"
      />
      <TextField
        label="Пароль"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
      />
      <Alert style={{ display: errorDisplay }} severity="error">
        Некорректный логин или пароль
      </Alert>
      <Button onClick={handlePostForm} variant="contained">
        LOGIN
      </Button>
    </div>
  );
};
export default Login;
