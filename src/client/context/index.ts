// import {createContext, Dispatch, SetStateAction} from 'react'
import * as React from 'react';

interface IAuthContext {
  isAuth: Boolean | null;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean | null>>;
  roles: string[] | null;
  setRoles: React.Dispatch<React.SetStateAction<string[] | null>>;
  isLoading: Boolean | null;
}
export const AuthContext = React.createContext<IAuthContext>({
  isAuth: null,
  setIsAuth: () => {},
  roles: null,
  setRoles: () => {},
  isLoading: null,
});

interface IRolesContext {
  roles: string[] | null;
  setRoles: React.Dispatch<React.SetStateAction<string | null>>;
}
export const RolesContext = React.createContext<IRolesContext>({
  roles: null,
  setRoles: () => {},
});
