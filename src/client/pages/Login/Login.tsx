import { FaxRounded, LogoDev, WindowSharp } from '@mui/icons-material';
import { Box, Button, TextField, Alert } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginResponse } from 'src/common/LoginResponse';
import { AuthContext } from '../../context';
import 'whatwg-fetch';
import { red } from '@mui/material/colors';
import { style } from 'typestyle';
import * as csx from 'csx';


const Login = () => {
  const { isAuth, setIsAuth, roles, setRoles } = React.useContext(AuthContext);
  const [loginValue, setLogin] = React.useState('');
  const [passwordValue, setPassword] = React.useState('');
  const [errorDisplay, setErrorDisplay] = React.useState('none');
  const [currentUser, setCurrentUser] = React.useState(0);

  const handlePostForm = (e: React.FormEvent) => {
    fetch('/auth/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login: loginValue, password: passwordValue }),
    })
      .then<LoginResponse>(async (response) => {
        return await response.json();
      })
      .then((response)=>{
        let roles = response['roles'];
        let rolesValues = roles.map((role)=>{
          return role['value'];
        })
        localStorage.setItem('roles', rolesValues);
        localStorage.setItem('auth', response['token']);
        setRoles(rolesValues);
        setIsAuth(response['token']);
      })
    e.preventDefault();
  };

  const logo = csx.url('./LoginSource/logo.png')
  const imageLogo = style({
    background: logo,
  });

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
