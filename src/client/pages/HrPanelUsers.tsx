import * as React from 'react';
import { Link, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import HrPanelNavbar from '../component/HrPanelNavbar';
import { GetUsersResponse } from 'src/common/GetUsersResponse';
import { Alert, Button, TextField } from '@mui/material';

const HrPanelUsers = () => {
  const [loginValue, setLogin] = React.useState('');
  const [user, setUser] = React.useState();
  const [errorDisplay, setErrorDisplay] = React.useState('none');

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

  const handleForm = (e: React.FormEvent) => {
    window.location.href = "/hr/users/add";
    e.preventDefault();
  };

  return (
    <div>
      <HrPanelNavbar />
      <Button onClick={handleForm}>Добавить пользоавтеля</Button>
      {users.map((user, index) => (
        <div key={user.id}>
          <h1>{user.login}</h1>
        </div>
      ))}
    </div>
  );
};

export default HrPanelUsers;
