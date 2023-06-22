import styled from '@emotion/styled';
import { Nav, NavDropdown } from 'react-bootstrap';

export const NavLinkStyled = styled(Nav.Link)({
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
