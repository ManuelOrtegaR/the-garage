/* eslint-disable react/prop-types */
import {
  UserContainer,
  NavLinkStyled,
  IconContainer,
} from './ComponentsStyles';
import basketIcon from '../../../assets/images/nav/basketIconW.svg';
import { useNavigate } from 'react-router-dom';

export const UserLogged = ({ user }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/ShoppingCart');
  };
  return (
    <>
      <UserContainer>
        <NavLinkStyled className={'nav-link'} to={'/profile'}>
          {user.name}
        </NavLinkStyled>
        <IconContainer borderRadius="50%" src={user.profileData.url_foto} />
        <IconContainer onClick={handleClick} maxWidth="25px" src={basketIcon} />
      </UserContainer>
    </>
  );
};
