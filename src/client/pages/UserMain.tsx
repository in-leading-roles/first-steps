import * as React from 'react';
import { Calendar } from '../component/Calendar';
import LogoutButton from '../component/LogoutButton';

const UserMain = () => {
  return (
    <div>
      <LogoutButton />
      <Calendar />
    </div>
  );
};

export default UserMain;
