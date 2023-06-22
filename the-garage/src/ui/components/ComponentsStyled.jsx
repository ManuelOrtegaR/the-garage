import styled from '@emotion/styled';
import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)({
  color: 'white',
  '&:hover': {
    color: 'white',
    fontWeight: 'bold',
  },
});

export const NavDropDownStyled = styled(NavDropdown)(({ theme }) => ({
  border: '1px solid white',
  borderRadius: '5px',
  backgroundColor: theme.colors.mainColor,
}));
