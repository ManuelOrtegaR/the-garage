import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

import logoTextW from '../../../assets/logos/logoTextW.png';

export const NavLogo = () => {
  return (
    <NavLink to={'/home'} className={'nav-brand'}>
      <LogoStyled alt="logo-the-garage" src={logoTextW} />
    </NavLink>
  );
};

const LogoStyled = styled('img')(() => ({
  width: '100%',
  height: 'auto',
  maxWidth: '200px',
}));
