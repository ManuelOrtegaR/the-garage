import styled from '@emotion/styled';

export const SubTitleStyled = styled('h2')(({ theme }) => ({
  color: theme.colors.mainColor,
  display: 'flex',
  justifyContent: 'center',
  fontFamily: theme.fontFamily.mainFont,
}));

export const TextStyled = styled('p')(({ theme }) => ({
  color: theme.colors.mainColor,
  display: 'flex',
  justifyContent: 'center',
  fontSize: theme.fonts[5],
}));

export const CarouselTitle = styled('h3')({
  fontFamily: 'Anton',
  textShadow: '4px 3px 2px black',
  fontSize: '1.5rem',
});
