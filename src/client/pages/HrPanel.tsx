import { Button } from '@mui/material';
import * as React from 'react';
import { Calendar } from '../component/Calendar'
import { AuthContext } from '../context';

const HrPanel = () => {
    const { isAuth, setIsAuth } = React.useContext(AuthContext);
    
    const handlePostForm = (e: React.FormEvent) => {
        setIsAuth(false);
        localStorage.removeItem("auth")
        e.preventDefault();
        console.log(isAuth);
      }

    return (
        <div>
            <Calendar/>
            <Button onClick={handlePostForm} variant="contained">LOGOUT</Button>
        </div>
    )
}

export default HrPanel;