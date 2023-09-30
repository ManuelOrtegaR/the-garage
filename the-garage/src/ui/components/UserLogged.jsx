/* eslint-disable react/prop-types */
import {
  UserContainer,
  NavLinkStyled,
  IconContainer,
} from "./ComponentsStyles";
import basketIcon from "../../../assets/images/nav/basketIconW.svg";
import { useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useCart } from "../../thegarage/store";

export const UserLogged = ({ user }) => {
  const { state } = useCart();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/ShoppingCart");
  };
  return (
    <>
      <UserContainer>
        <NavLinkStyled className={"nav-link"} to={"/profile"}>
          {user.name}
        </NavLinkStyled>
        <IconContainer borderRadius="50%" src={user.profileData.url_foto} />

        <IconContainer onClick={handleClick} maxWidth="25px" src={basketIcon} />
        <Badge bg="secondary">{state.totalItems}</Badge>
      </UserContainer>
    </>
  );
};
