import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarStyled = styled(Navbar)(({ theme }) => ({
  backgroundColor: theme.colors.mainColor,
}));

export const ContainerNavStyled = styled(Container)(() => ({
  gap: 30,
  maxWidth: '100%',
  display: 'flex',
  padding: '0px',
}));

export const LoginStyled = styled(NavLink)(({ theme }) => ({
  padding: '10px 20px',
  border: '1px solid white',
  borderRadius: '4px',
  textDecoration: 'none',
  color: 'white',
  '&:hover': {
    backgroundColor: 'white',
    color: theme.colors.mainColor,
  },
}));

export const UserContainer = styled('div')(() => ({
  display: 'flex',
  width: '350px',
  justifyContent: 'end',
  gap: 10,
  alignItems: 'center',
  color: 'white',
}));

export const NavLinkStyled = styled(NavLink)(({ ...props }) => ({
  margin: props.margin || '20px',
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    color: 'white',
    fontWeight: 'bold',
  },
}));

export const NavLinkStyledCompany = styled(NavLink)(({ theme }) => ({
  margin: '0 10px',
  color: theme.colors.mainColor,
  textDecoration: 'none',
  '&:hover': {
    color: theme.colors.mainColor,
    fontWeight: 'bold',
  },
}));

export const NavDropDownStyled = styled(NavDropdown)(({ theme }) => ({
  border: '1px solid white',
  borderRadius: '5px',
  backgroundColor: theme.colors.mainColor,
}));

export const FormSelectStyled = styled(Form.Select)(({ theme }) => ({
  maxWidth: '270px',
  color: 'white',
  backgroundColor: theme.colors.mainColor,
  appearance: 'listbox',
  backgroundImage: 'none',
  border: `1px solid ${theme.colors.mainColor}`,
  padding: '8px',
  '&:hover': {
    border: '1px solid white',
  },
}));

export const IconContainer = styled('img')(({ theme, ...props }) => ({
  maxWidth: props.maxWidth || '30px',
  borderRadius: props.borderRadius,
  boxShadow: `0px 0px 10px 0px ${theme.colors.mainColor}`,
  '&:hover': {
    transform: 'scale(1.1)',
    border: '1px solid white',
    boxShadow: `0px 0px 20px ${theme.colors.mainColor}`,
  },
}));
