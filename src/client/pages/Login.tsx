import { WindowSharp } from '@mui/icons-material';
import { Box, Button, TextField, Alert } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

const Login = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);

  const handlePostForm = (e: React.FormEvent) => {
    setIsAuth(true);
    localStorage.setItem("auth","true")
    e.preventDefault();
    console.log(isAuth);
  }

  return (
    <div>
      <TextField
        type="text"
      />
      <TextField
        type="password"
      />

      <Button onClick={handlePostForm} variant="contained">LOGIN</Button>

      <Alert severity="success">Вы успешно зарегистрировались!</Alert>;

    </div>
  );
};
export default Login;
