import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';
import Carousel from 'react-bootstrap/Carousel';

export const SubTitleStyled = styled('h2')(({ theme, ...props }) => ({
  color: props.color ? props.color : theme.colors.mainColor,
  display: 'flex',
  justifyContent: 'center',
  fontFamily: theme.fontFamily.titleFont,
}));

export const TextStyled = styled('p')(({ theme, ...props }) => ({
  color: props.color ? props.color : theme.colors.mainColor,
  display: 'flex',
  justifyContent: 'center',
  fontSize: theme.fonts[5],
}));

export const ButtonStyled = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: 'white',
  backgroundColor: theme.colors.secondaryColor,
  padding: '11px',
  borderRadius: '10%',
  '&:hover': {
    padding: '12px',
    backgroundColor: theme.colors.mainColor,
    fontWeight: 'bold',
  },
}));

export const CarouselStyled = styled(Carousel)(({ theme }) => ({
  backgroundColor: theme.colors.mainColor,
}));
