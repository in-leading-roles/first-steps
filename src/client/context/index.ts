import {createContext, Dispatch, SetStateAction} from 'react'

export type AuthContext = {
    isAuth:Boolean,
    setIsAuth:Dispatch<SetStateAction<boolean>>,
    isLoading:Boolean,
  }
export const MyAuthContext = createContext<AuthContext>(null);
