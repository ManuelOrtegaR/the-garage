import styled from '@emotion/styled';

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
