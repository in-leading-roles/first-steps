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
import { relative } from 'node:path/win32';
import logo from './LoginSource/logo.png';
import { Column } from 'sequelize-typescript';

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

  const body = style({
    margin: '0',
    padding: '0',
    height: '1080px',
    width: '1920px',
    backgroundColor: '#5F9FFF',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  })
  const inputs = style({
    display: 'flex',
    flexDirection: 'column',
  })
  const inputLogin = style({
    backgroundColor: "white",
    borderRadius: '10px',
  })
  const inputPassword = style({
    backgroundColor: "white",
    borderRadius: '10px',
  })
  const lightBlueFrame = style({
    width: '460px',
    height: '512px',
    borderRadius: '10px',
    backgroundColor: '#aed7de',
  })
  const imagelogo = style({
    height: '284px',
    width: '249px',
  })

  return (
    <body className={body}>
      <div className={lightBlueFrame}></div>
      <div>
      <img
      className = {imagelogo}
      src = {logo}
      />
      </div>
      <div className = {inputs}>
      <TextField
        className = {inputLogin}
        label="Логин"
        onChange={(e) => setLogin(e.target.value)}
        type="text"
      />
      <TextField
        className = {inputPassword}
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
        LOG IN
      </Button>
      </div>
    </body>
  );
};
export default Login;

