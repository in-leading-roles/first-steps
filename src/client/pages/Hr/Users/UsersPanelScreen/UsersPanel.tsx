import * as React from 'react';
import HrPanelNavbar from '../../HrPanelNavbar';
import { GetUsersResponse } from 'src/common/GetUsersResponse';
import { Alert, Button, TextField } from '@mui/material';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';
import LeftStrip from '../../LeftStrip';
import LeftStripIcon from '../../LeftStripIcon';
import logoPng from './../../../Login/LoginSource/images/logo.png';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const HrPanelAddUser = () => {
  const [loginValue, setLogin] = React.useState('');
  const [errorDisplay, setErrorDisplay] = React.useState('none');

  const registerUser = (e: React.FormEvent) => {
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

  const body = style({
    background: '#1E1E1E'
  })

  const logoImg = style({
    width: '49.54px',
    height: '50px',
  })

  const leftStripIconIcon = style({
    color:'white',
    fontSize: 'xx-large !important',
  })

  return (
    <div className={body}>
    <LeftStrip elements={[
        <img
          src={logoPng}
          className={logoImg}
        />,
      <LeftStripIcon isActieve={false} Path={'/userspanel'} Icon={<PersonOutlinedIcon className={leftStripIconIcon}/>}/>,
      <LeftStripIcon isActieve={true} Path={'/userspanel/add'} Icon={<PersonAddOutlinedIcon className={leftStripIconIcon}/>}/>,
      <LeftStripIcon isActieve={false} Path={'/eventspanel'} Icon={<EventAvailableOutlinedIcon className={leftStripIconIcon}/>}/>,
      <LeftStripIcon isActieve={false} Path={'/eventspanel/add'} Icon={<CalendarTodayOutlinedIcon className={leftStripIconIcon}/>}/>,
    ]} />
      <HrPanelNavbar elements={[]} />
      <TextField
        label="Логин"
        onChange={(e) => {
          setLogin(e.target.value);
        }}
        type="text"
      />
      <Alert style={{ display: errorDisplay }} severity="error">
        Такой пользователь уже существует
      </Alert>
      <Button onClick={registerUser} variant="contained">
        Создать
      </Button>
    </div>
  );
};

export default HrPanelAddUser;
