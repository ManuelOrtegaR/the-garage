import { useContext } from 'react';

import { LoginStyled } from './ComponentsStyles';
import { UserLogged } from './UserLogged';
import { AuthContext } from '../../auth/context/AuthContext';

// eslint-disable-next-line react-refresh/only-export-components

export const LoginSpace = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user ? (
        <UserLogged user={user} />
      ) : (
        <LoginStyled to={'/login'} aria-label="login-button">
          Ingresa / Regístrate
        </LoginStyled>
      )}
    </>
  );
};
