import * as React from 'react';
import HrPanelNavbar from './HrPanelNavbar';
import { GetUsersResponse } from 'src/common/GetUsersResponse';
import { Alert, Button, TextField } from '@mui/material';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

const LeftStrip = ({ elements }) => {

  const leftStrip = style({
    background: '#1263FF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: '5px',
    paddingLeft: '0px',
    paddingTop: '36px',
    paddingBottom: '36px',
    gap: '24px',
    left: '0px',
    top: '0px',
    position: 'absolute',
    width: '60px',
    height: '100%',
    boxShadow: '1px 0px 60px rgba(0, 0, 0, 0.25)',
  })

    return (
      <div className={leftStrip}>
      {
        elements.map((element: React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal) =>
          <div>{element}</div>
        )
      }
      </div>
    );
  };
  
  export default LeftStrip;
  