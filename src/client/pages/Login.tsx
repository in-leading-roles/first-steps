import { WindowSharp } from '@mui/icons-material';
import { Box, Button, TextField, Alert } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

const Login = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);
  const [text, setText] = React.useState('11111111111111');

  const handlePostForm = (e: React.FormEvent) => {
    setIsAuth(true);
    localStorage.setItem("auth","true")
    e.preventDefault();
    console.log(isAuth);

    
    // localStorage.setItem('auth', 'true');
  }

  return (
    <div>
      <TextField
        type="text"
      />
      <TextField
        type="password"
      />

      <div>{text}</div>
      <Button onClick={handlePostForm} variant="contained">LOGIN</Button>

      <Alert severity="success">Вы успешно зарегистрировались!</Alert>;

    </div>
  );
};
export default Login;
