import styled from '@emotion/styled';
import { Card } from 'react-bootstrap';

export const DivisorHr = styled('hr')(({ theme }) => ({
  borderColor: theme.colors.mainColor,
}));

export const DescriptionStyled = styled('div')(({ theme }) => ({
  color: theme.colors.mainColor,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '30px',
}));

export const CardElementStyle = styled(Card)(({ theme }) => ({
  color: theme.colors.mainColor,
}));

export const CardChekoutStyle = styled(Card)(({ theme }) => ({
  backgroundColor: theme.colors.mainColor,
  color: 'white',
  margin: '15px',
}));
export const TitleStyled = styled('div')(({ theme }) => ({
  color: theme.colors.mainColor,
  marginBottom: '30px',
  fontFamily: theme.fontFamily.mainFont,
  fontWeight: 'bold',

  // fontSize: theme.fonts[8],
}));
export const ServiceDetailStyled = styled('div')(({ theme }) => ({
  color: theme.colors.mainColor,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  '& > :first-child': {
    fontWeight: 'bold',
  },
}));

export const ContainerSheduleStyled = styled('div')(({ theme }) => ({
  color: theme.colors.mainColor,
}));
export const PriceStyled = styled('div')(({ theme }) => ({
  color: theme.colors.mainColor,
  fontWeight: 'bold',
}));
