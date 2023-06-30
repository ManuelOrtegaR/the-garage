import { LoginStyled } from './ComponentsStyles';
import { UserLogged } from './UserLogged';

// eslint-disable-next-line react-refresh/only-export-components
export const user = [
  {
    name: 'User Test Client',
    email: 'test@thegarage.com',
    phone: '(+57) 321-2000-824',
    address: 'Calle 40 #52-66 BR EL PERDIDO',
    id: 1,
    type: 'Client',
  },
  {
    name: 'User Test Company',
    email: 'test@thegarage.com',
    phone: '(+57) 321-2000-824',
    address: 'Calle 40 #52-66 BR EL PERDIDO',
    id: 2,
    type: 'Company',
  },
  {
    name: 'User Test Admin',
    email: 'test@thegarage.com',
    role: 'Admin',
    id: 3,
    type: 'Admin',
  },
];

export const LoginSpace = () => {
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
