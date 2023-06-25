import {
  UserContainer,
  NavLinkStyled,
  IconContainer,
} from './ComponentsStyles';

import userImg from '../../../assets/images/home/user.png';
import basketIcon from '../../../assets/images/nav/basketIconW.svg';

export const UserLogged = ({ user }) => {
  return (
    <>
      <UserContainer>
        <NavLinkStyled className={'nav-link'} to={'/profile'}>
          {user.name}
        </NavLinkStyled>
        <IconContainer borderRadius="50%" src={userImg} />
        <IconContainer maxWidth="25px" src={basketIcon} />
      </UserContainer>
    </>
  );
};
