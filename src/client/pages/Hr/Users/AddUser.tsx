import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HrPanelNavbar from '../HrPanelNavbar';
import { GetUsersResponse } from 'src/common/GetUsersResponse';
import MyButton from '../../../component/UI/Button/MyButton';
import LeftStrip from '../LeftStrip';
import { style } from 'typestyle';
import logoPng from './../../Login/LoginSource/images/logo.png';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import LeftStripIcon from '../LeftStripIcon';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const HrPanelUsers = () => {
  const [users, setUsers] = React.useState([]);
  let navigate = useNavigate();
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

  const GoToAddUser = (e: React.FormEvent) => {
    let addUserWay = "/userspanel/add";
    navigate(addUserWay);
  };

  const leftStripIcon = style({
    marginBottom: '116.67px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: '0px',
    // position: 'absolute',
    width: '60px',
    height: '60px',
    left: '0px',
    top: '95px',
  })

  const leftStripIconLine = style({
    marginLeft: '-5px',
    height: '60px',
    border: '4px solid #FFFFFF',
    flex: 'none',
    order: '0',
    flexGrow: '0',
  })

  const leftStripIconFrameActieve = style({
    marginTop: '116.67px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    width: '60px',
    height: '59px',
    background: 'rgba(255, 255, 255, 0.4)',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    flex: 'none',
    order: '1',
    flexGrow: '0',
    marginLeft: '-8px',
    padding: '4px',
  })

  const leftStripIconFrame = style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    width: '60px',
    height: '59px',
    flex: 'none',
    order: '1',
    flexGrow: '0',
    marginLeft: '2px',
  })

  
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
        <LeftStripIcon isActieve={true} Path={'/userspanel'} Icon={<PersonOutlinedIcon className={leftStripIconIcon}/>}/>,
        <LeftStripIcon isActieve={false} Path={'/userspanel/add'} Icon={<PersonAddOutlinedIcon className={leftStripIconIcon}/>}/>,
        <LeftStripIcon isActieve={false} Path={'/eventspanel'} Icon={<EventAvailableOutlinedIcon className={leftStripIconIcon}/>}/>,
        <LeftStripIcon isActieve={false} Path={'/eventspanel/add'} Icon={<CalendarTodayOutlinedIcon className={leftStripIconIcon}/>}/>,
      ]} />
      <HrPanelNavbar elements={[
        <MyButton onClick={GoToAddUser}>Добавить пользователя</MyButton>
      ]} />
      {users.map((user, index) => (
        <div key={user.id}>
          <h1>{user.login}</h1>
        </div>
      ))}
    </div>
  );
};

export default HrPanelUsers;
