import * as React from 'react';
import { Link, Route, Routes, Navigate, BrowserRouter, useNavigate } from 'react-router-dom';
import HrPanelNavbar from '../component/HrPanelNavbar';
import { GetUsersResponse } from 'src/common/GetUsersResponse';
import { Alert, Button, TextField } from '@mui/material';
import MyButton from '../component/UI/Button/MyButton';


const HrPanelUsers = () => {
  const [users, setUsers] = React.useState([]);
  let navigate = useNavigate(); 
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

  const AddUser = (e: React.FormEvent) => {
    let addUserWay = "/userspanel/add";
    navigate(addUserWay);
  };

  return (
    <div>
      <HrPanelNavbar />
      <MyButton onClick={AddUser}>Добавить пользоавтеля</MyButton>
      {users.map((user, index) => (
        <div key={user.id}>
          <h1>{user.login}</h1>
        </div>
      ))}
    </div>
  );
};

export default HrPanelUsers;
