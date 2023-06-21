import styled from '@emotion/styled';
import { Nav, NavDropdown } from 'react-bootstrap';

export const NavLinkStyled = styled(Nav.Link)({
  color: 'white',
  '&:hover': {
    color: 'white',
    fontWeight: 'bold',
  },
});

export const SubTitleStyled = styled('h2')(({ theme }) => ({
  color: theme.colors.mainColor,
  display: 'flex',
  justifyContent: 'center',
  fontFamily: theme.fontFamily.titleFont,
}));

export const TextStyled = styled('p')(({ theme }) => ({
  color: theme.colors.mainColor,
  display: 'flex',
  justifyContent: 'center',
  fontSize: theme.fonts[5],
}));

export const NavDropDownStyled = styled(NavDropdown)(({ theme }) => ({
  border: '1px solid white',
  borderRadius: '5px',
  backgroundColor: theme.colors.mainColor,
}));
