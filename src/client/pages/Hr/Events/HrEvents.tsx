import * as React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../../../component/UI/Button/MyButton';
import { GetUsersResponse } from 'src/common/GetUsersResponse';
import { Calendar } from '../../../component/Calendar';
import HrPanelNavbar from '../HrPanelNavbar';

const HrPanelAddUser = () => {
  const [users, setUsers] = React.useState([]);
  
  const GoToAddEvent = (e: React.FormEvent) => {
    window.location.href = "/eventspanel/add";
    e.preventDefault();
  };
  
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
      <HrPanelNavbar elements={[
        <Link to="/userspanel">Пользователи</Link>,
        <Link to="/eventspanel">События</Link>,
        <MyButton onClick={GoToAddEvent}>Добавить событие</MyButton>]} />
      <Calendar />
    </div>
  );
};

export default HrPanelAddUser;
