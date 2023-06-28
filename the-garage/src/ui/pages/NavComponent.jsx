import { Button, Container, Navbar } from 'react-bootstrap';
import { NavLogo, SearchInput, NavLocation, NavMenu } from '../components';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Config } from '../../thegarage/pages';

export const NavComponent = () => {
  return (
    <NavbarStyled>
      <ContainerNavStyled>
        <NavLogo />
        {!Config ? (
          <>
            <SearchInput />
            <ButtonStyled variant="outline-light">
              <NavLink
                to={'/login'}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Ingresa / Crea una cuenta
              </NavLink>
            </ButtonStyled>
          </>
        ) : (
          <>
            <ContainerNavStyled className="d-flex justify-content-end">
              <NavMenu />
            </ContainerNavStyled>
          </>
        )}
      </ContainerNavStyled>
      {!Config ? (
        <>
          <ContainerNavStyled>
            <NavLocation />
            <NavMenu />
          </ContainerNavStyled>
        </>
      ) : null}
    </NavbarStyled>
  );
};

const NavbarStyled = styled(Navbar)(({ theme }) => ({
  backgroundColor: theme.colors.mainColor,
  display: 'flex',
  flexDirection: 'column',
  fontSize: theme.fonts[6],
}));

const ContainerNavStyled = styled(Container)(({ theme }) => ({
  gap: 30,
  marginTop: 5,
  marginBottom: 5,
  maxWidth: '100%',
  fontFamily: theme.fontFamily.mainFont,
}));

const ButtonStyled = styled(Button)(() => ({
  width: '30rem',
}));
