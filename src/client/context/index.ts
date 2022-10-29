// import {createContext, Dispatch, SetStateAction} from 'react'
import * as React from 'react';

interface IAuthContext {
    isAuth:Boolean | null;
    setIsAuth:React.Dispatch<React.SetStateAction<boolean| null>>;
    isLoading:Boolean| null;
  }
export const AuthContext = React.createContext<IAuthContext>({
  isAuth: null,
  setIsAuth: () => {},
  isLoading: null,
});

