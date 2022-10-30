import * as React from 'react';
import { GetUsersResponse } from 'src/common/GetUsersResponse';
import { Calendar } from '../component/Calendar';
import HrPanelNavbar from '../component/HrPanelNavbar';

const HrPanelAddUser = () => {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch('/users', {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem('auth')}`,
      }),
    })
      .then<GetUsersResponse>((res) => res.json())
      .then(async (res) => setUsers(await res));
  }, []);

  return (
    <div>
      <HrPanelNavbar />
      <Calendar />
    </div>
  );
};

export default HrPanelAddUser;
