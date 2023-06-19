import { Button, Container, Navbar } from 'react-bootstrap';
import { NavLogo } from './NavLogo';
import { SearchInput } from './SearchInput';
import { NavLocation } from './NavLocation';
import { NavMenu } from './NavMenu';
import styled from '@emotion/styled';

export const NavComponent = () => {
  return (
    <NavbarStyled>
      <ContainerNavStyled>
        <NavLogo />
        <SearchInput />
        <ButtonStyled variant="outline-light" href="/login">
          Ingresa / Crea una cuenta
        </ButtonStyled>
      </ContainerNavStyled>
      <ContainerNavStyled>
        <NavLocation />
        <NavMenu />
      </ContainerNavStyled>
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
