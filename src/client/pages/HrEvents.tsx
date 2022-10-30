import { TextField } from '@mui/material';
import * as React from 'react';
import { Calendar } from '../component/Calendar';
import HrPanelNavbar from '../component/HrPanelNavbar';

const HrPanelAddUser = () => {
    return (
        <div>
          <HrPanelNavbar />
          <Calendar/>
        </div>
      );
}

export default HrPanelAddUser;
