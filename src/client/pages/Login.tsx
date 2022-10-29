import { Box, Button, TextField } from '@mui/material';
import * as React from 'react';

const Login = () => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="outlined-required"
        label="Login"
        defaultValue="UserName"
      />
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
      />
      <Button variant="contained">LOGIN</Button>
    </Box>
  );
};
export default Login;
