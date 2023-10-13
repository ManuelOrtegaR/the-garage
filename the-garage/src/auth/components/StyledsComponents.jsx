import styled from '@emotion/styled';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import background from './../../../assets/authIcons/AuthBgFull.png';

// export const MainConteiner = styled("div")(({ theme }) => ({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh",
//   width: "100vw",
//   flexDirection: "column",
//   backgroundColor: theme.colors.mainColor,
// }));

export const MainConteiner = styled('div')(() => ({
  display: 'flex',
  height: '100vh',
  width: '100vw',
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));
export const TitlePg = styled('h1')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
  fontFamily: theme.fontFamily.titleFont,
  fontSize: theme.fonts[1],
  color: theme.colors.mainColor,
}));

export const TextPg = styled('p')(({ theme, ...props }) => ({
  color: props.color ? props.color : theme.colors.mainColor,
  display: 'flex',
  justifyContent: 'center',
  fontSize: theme.fonts[6],
}));

export const NavLinkStyled = styled(Nav.Link)(({ theme }) => ({
  color: theme.colors.mainColor,
  display: 'flex',
  justifyContent: 'center',
  fontSize: theme.fonts[6],
  backgroundColor: 'white',
  fontFamily: theme.fontFamily.mainFont,
  '&:hover': {
    backgroundColor: 'gray',
    color: theme.colors.mainColor,
  },
  '&:active': {
    backgroundColor: theme.colors.mainColor,
    color: 'gray',
  },
}));

export const NavLinkRecovery = styled(Nav.Link)(({ theme }) => ({
  color: theme.colors.secondaryColor,
  fontSize: theme.fonts[6],
  backgroundColor: 'white',
  fontFamily: theme.fontFamily.mainFont,
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  fontSize: theme.fonts[4],
  backgroundColor: theme.colors.mainColor,
  fontFamily: theme.fontFamily.mainFont,
  '&:hover': {
    backgroundColor: 'gray',
    color: theme.colors.mainColor,
  },
}));
