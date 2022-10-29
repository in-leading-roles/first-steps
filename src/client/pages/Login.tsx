import { WindowSharp } from '@mui/icons-material';
import { Box, Button, TextField, Alert } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginResponse } from 'src/common/LoginResponse';
import { AuthContext } from '../context';

const Login = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);
  const [tokenLogin, setToken] = React.useState({ token: null });
  const [loginValue, setLogin] = React.useState('');
  const [passwordValue, setPassword] = React.useState('');

  const handlePostForm = (e: React.FormEvent) => {
    // let formData = new FormData();
    // formData.append('login', loginValue);
    // formData.append('password', passwordValue);

    // console.log(formData);

    fetch('http://localhost/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        login: loginValue,
        password: passwordValue,
      }),
    })
      .then<LoginResponse>((response) => response.json())
      .then(async (response) => setToken(await response));
    console.log(tokenLogin['token']);

    if (tokenLogin['token']) {
      setIsAuth(true);
      localStorage.setItem('auth', tokenLogin['token']);
      console.log(tokenLogin['token']);
    } else {
      console.log('Error');
    }
    e.preventDefault();
  };

  return (
    <div>
      <TextField onChange={(e) => setLogin(e.target.value)} type="text" />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />

      <Button onClick={handlePostForm} variant="contained">
        LOGIN
      </Button>
    </div>
  );
};
export default Login;
