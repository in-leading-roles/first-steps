import * as React from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { AuthContext } from '../../context';
import LogoutButton from '../../component/LogoutButton';
import Navbar from '../../component/Navbar';
import MyButton from '../../component/UI/Button/MyButton';

const HrPanelNavbar = ({ elements }) => {
  elements = elements.concat([
    <MyButton onClick={()=> window.location.href = "/userspanel"}>Пользователи</MyButton>,
    <MyButton onClick={()=> window.location.href = "/eventspanel"}>События</MyButton>,
    <LogoutButton />
    ],
    );
  return (
    <div>
      <Navbar elements={elements} />
    </div>
  );
};

export default HrPanelNavbar;
