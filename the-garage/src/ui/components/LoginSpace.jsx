import { LoginStyled } from './ComponentsStyles';
import { UserLogged } from './UserLogged';

export const LoginSpace = () => {
  const user = {
    name: 'Manuel Ortega',
    id: 2,
    type: 'client',
  };

  // const user = null;

  return (
    <>
      {user ? (
        <UserLogged user={user} />
      ) : (
        <LoginStyled to={'/login'}>Ingresa / Crea una cuenta</LoginStyled>
      )}
    </>
  );
};
