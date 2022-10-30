import * as React from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { AuthContext } from '../context';

const HrPanelNavbar = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);
  const handlePostForm = (e: React.FormEvent) => {
    setIsAuth(false);
    localStorage.removeItem('auth');
    e.preventDefault();
    console.log(isAuth);
  };

  return (
    <div>
      <Link to="/hr/users/view">Пользователи</Link>
      <Link to="/hr/events">События</Link>
      <Button onClick={handlePostForm} variant="contained">
        LOG OUT
      </Button>
      {/* Попробуй это запихать в заглушку профиля */}
    </div>
  );
};

export default HrPanelNavbar;
