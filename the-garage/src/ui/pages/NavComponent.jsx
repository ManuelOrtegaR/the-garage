import { getSessionData } from '../../api/auth';
import { clearSession, getSession } from '../../api/session';
import {
  NavLogo,
  SearchInput,
  NavLocation,
  NavMenu,
  NavbarStyled,
  ContainerNavStyled,
  LoginSpace,
} from '../components';

export const NavComponent = () => {
  (async () => {
    const token = getSession();

    if (token) {
      const { data } = await getSessionData();

      if (!data) {
        clearSession();
        localStorage.removeItem('user');
      }
    }
  })();
  return (
    <>
      <NavbarStyled>
        <ContainerNavStyled>
          <NavLogo />
          <SearchInput />
          <LoginSpace />
        </ContainerNavStyled>
        <ContainerNavStyled>
          <NavLocation />
          <NavMenu />
        </ContainerNavStyled>
      </NavbarStyled>
    </>
  );
};
