import * as React from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { AuthContext } from '../context';
import LogoutButton from './LogoutButton';

const HrPanelNavbar = () => {
  return (
    <div>
      <Link to="/users">Пользователи</Link>
      <Link to="/events">События</Link>
      <LogoutButton/>
    </div>
  );
};

export default HrPanelNavbar;
