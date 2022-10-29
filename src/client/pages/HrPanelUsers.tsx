import * as React from 'react';
import { Link, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import HrPanelNavbar from '../component/HrPanelNavbar';
import { GetUsersResponse } from 'src/common/GetUsersResponse';
import { Button } from '@mui/material';

const HrPanelUsers = () => {
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
      <Link to="/hr/user/add">Добавить пользоавтеля</Link>
      {users.map((user, index) => (
        <div key={user.id}>
          <h1>{user.login}</h1>
        </div>
      ))}
    </div>
  );
};

export default HrPanelUsers;
