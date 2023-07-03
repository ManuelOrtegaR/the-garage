import { LoginStyled } from './ComponentsStyles';
import { UserLogged } from './UserLogged';

// eslint-disable-next-line react-refresh/only-export-components

export const LoginSpace = () => {
  // const user = {
  //   name: 'Manuel Ortega',
  //   type: 'Client',
  //   id: 1,
  // };

  const user = null;

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
