import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BtnSubmitStyled = styled('button')(
  ({ theme, variant, fontSize, width }) => ({
    display: 'flex',
    width,
    justifyContent: 'center',
    padding: '5px 10px 5px 10px',
    color: variant === 'light' ? theme.colors.mainColor : 'white',
    fontSize: theme.fonts[fontSize],
    backgroundColor:
      variant === 'light' ? theme.colors.gray100 : theme.colors.mainColor,
    border: variant === 'light' ? 'white' : theme.colors.secondaryColor,
    borderRadius: 5,
    '&:hover': {
      backgroundColor:
        variant === 'light'
          ? theme.colors.gray200
          : theme.colors.secondaryColor,
      border:
        variant === 'light'
          ? theme.colors.gray200
          : theme.colors.secondaryColor,
      color: variant === 'light' ? theme.colors.mainColor : 'white',
    },
  }),
);

export const BtnLinkStyled = styled(NavLink)(
  ({ theme, variant, fontSize, width }) => ({
    display: 'flex',
    width,
    justifyContent: 'center',
    textDecoration: 'none',
    padding: '5px 10px 5px 10px',
    color: variant === 'light' ? theme.colors.mainColor : 'white',
    fontSize: theme.fonts[fontSize],
    backgroundColor:
      variant === 'light' ? theme.colors.gray100 : theme.colors.mainColor,
    border: variant === 'light' ? 'white' : theme.colors.secondaryColor,
    borderRadius: 5,
    '&:hover': {
      backgroundColor:
        variant === 'light'
          ? theme.colors.gray200
          : theme.colors.secondaryColor,
      border:
        variant === 'light'
          ? theme.colors.gray200
          : theme.colors.secondaryColor,
      color: variant === 'light' ? theme.colors.mainColor : 'white',
    },
  }),
);

export const BtnDangerSubmitStyled = styled('button')(
  ({ theme, variant, fontSize, width }) => ({
    display: 'flex',
    width,
    justifyContent: 'center',
    padding: '5px 10px 5px 10px',
    color: variant === 'light' ? 'red' : 'white',
    fontSize: theme.fonts[fontSize],
    backgroundColor: variant === 'light' ? theme.colors.gray100 : 'red',
    border: '2px none red',
    borderRadius: 5,
    '&:hover': {
      backgroundColor: variant === 'light' ? theme.colors.gray200 : 'darkred',
      border: '2px none darkred',
      color: 'white',
    },
  }),
);

export const BtnDangerLinkStyled = styled(NavLink)(
  ({ theme, variant, fontSize, width }) => ({
    display: 'flex',
    width,
    justifyContent: 'center',
    textDecoration: 'none',
    padding: '5px 10px 5px 10px',
    color: variant === 'light' ? 'red' : 'white',
    fontSize: theme.fonts[fontSize],
    backgroundColor: variant === 'light' ? theme.colors.gray100 : 'red',
    border: '2px solid red',
    borderRadius: 5,
    '&:hover': {
      backgroundColor: variant === 'light' ? theme.colors.gray200 : 'darkred',
      border: '2px solid darkred',
      color: 'white',
    },
  }),
);
