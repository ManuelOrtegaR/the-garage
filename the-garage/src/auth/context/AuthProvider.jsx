import { useEffect, useReducer, useState } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';
import { clearSession, setSession } from '../../api/session';

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [carElements, setCarElements] = useState([]);
  const addCarElement = (item, cant) => {
    setCarElements([item, ...carElements]);
  };

  const [authState, dispatch] = useReducer(authReducer, {}, init);
  const login = (name = '', userClass, token, profileData = '') => {
    const user = { name, userClass, profileData };
    const action = {
      type: types.login,
      payload: { user, token },
    };
    setSession(token);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  };
  const logout = () => {
    const action = {
      type: types.logout,
    };
    clearSession();
    dispatch(action);
    localStorage.removeItem('user');
  };
  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login: login,
        logout: logout,
        carElements,
        addCarElement,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
