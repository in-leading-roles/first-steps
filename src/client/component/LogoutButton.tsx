import { Button } from "@mui/material";
import React from "react";
import { AuthContext } from "../context";

const LogoutButton = () => {
    const { isAuth, setIsAuth, roles, setRoles } = React.useContext(AuthContext);
    const handlePostForm = (e: React.FormEvent) => {
      setIsAuth(false);
      setRoles(null);
      localStorage.removeItem('auth');
      localStorage.removeItem('roles');
      e.preventDefault();
    };

  return (
    <Button onClick={handlePostForm} variant="contained">
      LOG OUT
    </Button>
  );
};

export default LogoutButton;
