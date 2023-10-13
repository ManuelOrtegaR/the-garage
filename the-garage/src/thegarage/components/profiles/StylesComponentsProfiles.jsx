import styled from '@emotion/styled';
import {
  Button,
  DropdownButton,
  Form,
  ListGroup,
  Pagination,
  Table,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)(({ theme }) => ({
  display: 'block',
  margin: 'auto',
  padding: '8px 16px',
  color: theme.colors.mainColor,
  textDecoration: 'none',
  '&:hover': {
    background: theme.colors.mainColor,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '6px',
  },
  '&.active': {
    background: theme.colors.mainColor,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '6px',
  },
}));

export const NavLinkProfile = styled(NavLink)(() => ({
  '&:hover': {
    border: 'solid',
    borderColor: 'white',
    borderRadius: '25px',
  },
}));

export const NavLinkEdit = styled(NavLink)(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  color: theme.colors.mainColor,

  '&:hover': {
    background: theme.colors.mainColor,
    borderRadius: '25px',
    color: 'white',
  },
}));

export const BtnStateStyle = styled('button')(({ theme, variant }) => ({
  justifyContent: 'center',
  color: 'white',
  backgroundColor: variant === 'open' ? '#00ff00' : '#6f7c90',
  border: variant === 'open' ? 'white' : theme.colors.secondaryColor,
  borderRadius: 25,
  '&:hover': {
    fontWeight: 'bold',
    //color: theme.colors.mainColor,
    backgroundColor: variant === 'open' ? '#b3ffb3' : '#d4d8de',
  },
}));

export const ItemStyle = styled(ListGroup.Item)(() => ({
  margin: 5,
  display: 'flex',
  justifyContent: 'space-between',
  textAlign: 'center',
  alignItems: 'center',
  '&.disabled': {
    color: '#d9d9d9',
  },
}));

export const ListGroupStyle = styled(ListGroup.Item)(() => ({
  padding: 1,
}));

export const PaginationStyle = styled(Pagination)(() => ({
  justifyContent: 'center',
}));

export const PagPrevStyle = styled(Pagination.Prev)(() => ({
  margin: 5,
}));
export const PagItemStyle = styled(Pagination.Item)(() => ({
  margin: 5,
}));

export const PagEllipsisStyle = styled(Pagination.Ellipsis)(() => ({
  margin: 5,
}));

export const PagNextStyle = styled(Pagination.Next)(() => ({
  margin: 5,
}));

export const FormTextStyle = styled(Form.Control)(() => ({
  border: 'none',
  height: 4,
  margin: 5,
}));

export const ButtonSentStyle = styled(Button)(({ theme }) => ({
  color: theme.colors.mainColor,
  background: 'transparent',
  borderColor: theme.colors.mainColor,
  '&:hover': {
    background: theme.colors.mainColor,
    color: 'white',
  },
}));

export const ListMessages = styled.ul(() => ({
  width: '100%',
  listStyle: 'none',
}));

export const ListMessagesItem = styled.li(() => ({
  maxWidth: '400px',
  margin: '5px auto 5px 16px',
  padding: 7,
  color: 'white',
  background: '#808080',
  borderRadius: '10px 10px 10px 0',
  '&.user': {
    margin: '5px 16px 5px auto',
    color: 'white',
    background: '#0059b3',
    textAlign: 'end',
    borderRadius: '10px 10px 0px 10px',
  },
}));

export const ReportBtnStyle = styled(Button)(() => ({
  background: '#FF0000',
  '&:hover': {
    background: '#ff4d4d',
    fontWeight: 'bold',
  },
}));

export const FinishBtnStyle = styled(Button)(({ theme }) => ({
  color: theme.colors.mainColor,
  borderColor: theme.colors.mainColor,
  background: 'transparent',
  '&:hover': {
    color: 'white',
    fontWeight: 'bold',
    background: theme.colors.mainColor,
  },
}));

export const StatusStyle = styled.span(() => ({
  padding: '2px 5px',
  borderRadius: '10px',
  color: 'white',
  fontWeight: 'bold',
  '&.Entregada': {
    background: '#39e600',
  },
  '&.Pagada': {
    background: '#E5EA00',
  },
  '&.Enviada': {
    background: '#EB7F00',
  },
  '&.Cancelada': {
    background: '#FF0000',
  },
}));

export const ShowOrder = styled(Button)(({ theme }) => ({
  color: theme.colors.mainColor,
  background: 'transparent',
  border: 'none',
  '&:hover': {
    color: 'white',
    background: theme.colors.mainColor,
  },
}));

export const TableStyled = styled(Table)(() => ({
  textAlign: 'center',
}));

export const ProcessingStyle = styled.span(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  background: '#c2c2c3',
  color: 'white',
  borderRadius: 25,
  padding: '2px 4px',
  '&.Pagada': {
    background: '#E5EA00',
  },
}));

export const OnTheWayStyle = styled(DropdownButton)(() => ({
  position: 'absolute',
  top: 0,
  left: '50%',
  background: '#c2c2c3',
  color: 'white',
  borderRadius: 25,
  '&.Enviada': {
    background: '#EB7F00',
  },
  '&.Cancelada': {
    background: '#eb0000',
  },
}));

export const DeliveredStyle = styled.span(() => ({
  position: 'absolute',
  top: 0,
  left: '100%',
  background: '#c2c2c3',
  color: 'white',
  borderRadius: 25,
  padding: '2px 4px',
  '&.Entregada': {
    background: '#39e600',
  },
}));

export const DateStyle = styled.span(() => ({
  position: 'absolute',
  fontSize: '12px',
  top: '25px',
  margin: 0,
  padding: 0,
}));

export const StatusRequestStyle = styled.span(() => ({
  padding: '2px 5px',
  borderRadius: '10px',
  color: 'white',
  fontWeight: 'bold',
  '&.pending': {
    background: '#8E98A8',
  },
  '&.approved': {
    background: '#0FBC00',
  },
  '&.dismissed': {
    background: '#FF0000',
  },
}));

export const SpanForm = styled.span(() => ({
  width: '100%',
  height: '37.6px',
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '8px',
}));
