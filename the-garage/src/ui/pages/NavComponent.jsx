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
