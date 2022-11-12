import * as React from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { AuthContext } from '../../context';
import LogoutButton from '../../component/LogoutButton';

const HrPanelNavbar = ({ elements }) => {
  return (
    <div>
      {
        elements.map((element: React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal) =>
          <div>{element}</div>
        )
      }
      <LogoutButton />
    </div>
  );
};

export default HrPanelNavbar;
