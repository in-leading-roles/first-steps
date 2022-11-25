import * as React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../../../component/UI/Button/MyButton';
import { GetUsersResponse } from 'src/common/GetUsersResponse';
import { Calendar } from '../../../component/Calendar';
import HrPanelNavbar from '../HrPanelNavbar';
import LeftStrip from '../LeftStrip';
import { style } from 'typestyle';
import logoPng from './../../Login/LoginSource/images/logo.png';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import LeftStripIcon from '../LeftStripIcon';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

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


  const logoImg = style({
    width: '49.54px',
    height: '50px',
  })

  const leftStripIconIcon = style({
    color:'white',
    fontSize: 'xx-large !important',
  })
  
  return (
    <div>
      <LeftStrip elements={[
          <img
            src={logoPng}
            className={logoImg}
          />,
        <LeftStripIcon isActieve={false} Path={'/userspanel'} Icon={<PersonOutlinedIcon className={leftStripIconIcon}/>}/>,
        <LeftStripIcon isActieve={false} Path={'/userspanel/add'} Icon={<PersonAddOutlinedIcon className={leftStripIconIcon}/>}/>,
        <LeftStripIcon isActieve={true} Path={'/eventspanel'} Icon={<EventAvailableOutlinedIcon className={leftStripIconIcon}/>}/>,
        <LeftStripIcon isActieve={false} Path={'/eventspanel/add'} Icon={<CalendarTodayOutlinedIcon className={leftStripIconIcon}/>}/>,
      ]} />
      <HrPanelNavbar elements={[<MyButton onClick={GoToAddEvent}>Добавить событие</MyButton>]} />
      {/* <Calendar /> */}
    </div>
  );
};

export default HrPanelAddUser;
