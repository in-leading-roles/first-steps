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
import logoPng from './LoginSource/images/logo.png';
import whiteLogoPng from './LoginSource/images/whiteLogo.png';
import { Column } from 'sequelize-typescript';
import { ClassNames } from '@emotion/react';

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
    position: 'relative',
    width: '1920px',
    height: '1080px',
    background: 'linear-gradient(73.8deg, #1263FF 12.24%, #5F9FFF 86.04%)',
  })
  const inputLogin = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '18px',

    width: '416px',

    background: '#FFFFFF',
    borderRadius: '7px',

    flex: 'none',
    order: '0',
    flexGrow: '0',
  }
  const inputPassword = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '18px',

    width: '416px',

    background: '#FFFFFF',
    borderRadius: '7px',

    flex: 'none',
    order: '1',
    flexGrow: '0',
  }

  const logIn = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '13px 35px',
    gap: '18px',

    width: '416px',
    height: '62px',

    background: '#1263FF',
    borderRadius: '7px',

    flex: 'none',
    order: '1',
    flexGrow: '0',
    // alignSelf: 'stretch',
  })

   const lightBlueFrame = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 22px',
    gap: '31px',
    
    position: 'absolute',
    width: '460px',
    height: '512px',
    left: '1135px',
    top: '284px',
    
   background: 'rgba(255, 255, 255, 0.5)',
   boxShadow: '0px 4px 30px 10px rgba(0, 0, 0, 0.25)',
   borderRadius: '10px',
   })

  const logo = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: '0px',

    position: 'absolute',
    width: '638px',
    height: '315px',
    left: '291px',
    top: '240px',
  })
  
  const imagelogo = style({
    width: '249px',
    height: '284px',
 
    flex: 'none',
    order: '0',
    flexGrow: '0',
    margin: '0px -136px',
  })

  const textLogo = style({
    width: '470px',
    height: '117px',

    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '96px',
    lineHeight: '117px',

    color: '#FFFFFF',

    flex: 'none',
    order: '1',
    flexGrow: '0',
  })

  const smallTextLogo = style({
    position: 'absolute',
    width: '626px',
    height: '29px',
    left: '333px',
    top: '577px',

    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '24px',
    lineHeight: '29px',

    color: '#FFFFFF',

  })

  const imagelogowhite = style({
    width: '80px',
    height: '89.54px',
  })

  const beam = style({
    position: 'absolute',
    width: '2159.06px',
    height: '913.92px',
    left: '-940px',
    top: '-336.38px', //336.38 px in figma

    background: 'linear-gradient(282.85deg, rgba(147, 229, 255, 0.12) -46.24%, rgba(147, 229, 255, 0) 110.65%)',
    transform: 'rotate(-35deg)',
  })

  //пузыри нумеруются по часовой стрелке, начиная с правого верхнего
  
  const bubble1 = style({
    background: 'linear-gradient(108.94deg, rgba(81, 233, 254, 0.83) 52.49%, rgba(152, 203, 240, 0) 119.99%)',
    borderRadius: '250px',
    position: 'absolute',
    width: '629px',
    height: '360px',
    left: '1555px',
    top: '-208px',
  })

  const bubble2 = style({
    background: 'linear-gradient(108.94deg, rgba(81, 233, 254, 0.83) 52.49%, rgba(152, 203, 240, 0) 119.99%)',
    borderRadius: '250px',
    position: 'absolute',
    width: '629px',
    height: '319px',
    left: '1771px',
    top: '42px',
  })

  const bubble3 = style({
    background: 'linear-gradient(201.47deg, rgba(81, 233, 254, 0.83) 18.92%, rgba(81, 233, 254, 0) 78.46%)',
    borderRadius: '300px',
    position: 'absolute',
    width: '522px',
    height: '521px',
    left: '1739px',
    top: '717px',
  })

  const bubble4 = style({
    background: 'linear-gradient(201.47deg, rgba(81, 233, 254, 0.83) 18.92%, rgba(81, 233, 254, 0) 78.46%)',
    borderRadius: '300px',
    position: 'absolute',
    width: '522px',
    height: '521px',
    left: '95px',
    top: '933px',
  })

  const bubble5 = style({
    background: 'linear-gradient(201.47deg, rgba(81, 233, 254, 0.83) 18.92%, rgba(81, 233, 254, 0) 78.46%)',
    borderRadius: '300px',
    position: 'absolute',
    width: '421px',
    height: '420px',
    left: '1448px',
    top: '907px',
  })

  const bubble6 = style({
    background: 'linear-gradient(201.47deg, rgba(81, 233, 254, 0.83) 18.92%, rgba(81, 233, 254, 0) 78.46%)',
    borderRadius: '300px',
    position: 'absolute',
    width: '606px',
    height: '502px',
    left: '-342px',
    top: '752px',
  })

  const bubble7 = style({
    background: 'linear-gradient(307.59deg, rgba(0, 10, 255, 0.83) -20.77%, rgba(81, 233, 254, 0) 85.32%)',
    borderRadius: '300px',
    position: 'absolute',
    width: '522px',
    height: '521px',
    left: '-166px',
    top: '-243px',
  })

  const bubble8 = style({
    background: 'linear-gradient(108.94deg, rgba(81, 233, 254, 0.83) 52.49%, rgba(152, 203, 240, 0) 119.99%)',
    borderRadius: '250px',
    position: 'absolute',
    width: '719px',
    height: '360px',
    left: '-265px',
    top: '-221px',
  })

  document.body.style.margin = '0px';
  document.body.style.padding = '0px';
  return (
    <div className={body}>
      <div></div>
      <div className={lightBlueFrame}>
        <img
        className = {imagelogowhite}
        src = {whiteLogoPng}
        />
        <TextField
          fullWidth
          sx = {inputLogin}
          label="Логин"
          onChange={(e) => setLogin(e.target.value)}
          type="text"
        />
        <TextField
          fullWidth
          sx = {inputPassword}
          label="Пароль"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
        /> 
        <Alert style={{ display: errorDisplay }} severity="error">
          Некорректный логин или пароль
        </Alert>
        <Button onClick={handlePostForm} variant="contained" className = {logIn}>
          LOG IN
        </Button>
      </div>
      <div className = {logo}>
        <img
        className = {imagelogo}
        src = {logoPng}
        />
        <div className = {textLogo}>
          irst steps
        </div>
      </div>
      <div className = {beam}></div>
      <div className = {smallTextLogo}>
        ПЛАТФОРМА ДЛЯ ОНБОРДИНГА СОТРУДНИКОВ
      </div>
      
      <div className={bubble1}></div>
      <div className={bubble2}></div>
      <div className={bubble3}></div>
      <div className={bubble4}></div>
      <div className={bubble5}></div>
      <div className={bubble6}></div>
      <div className={bubble7}></div>
      <div className={bubble8}></div>
    </div>
  );
};
export default Login;

