import * as React from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { AuthContext } from '../../context';
import LogoutButton from '../../component/LogoutButton';
import Navbar from '../../component/Navbar';

const HrPanelNavbar = ({ elements }) => {
  elements = elements.concat([
    <Link to="/userspanel">Пользователи</Link>,
    <Link to="/eventspanel">События</Link>,
    <LogoutButton />
    ]);
  return (
    <div>
      <Navbar elements={elements} />
    </div>
  );
};

export default HrPanelNavbar;
