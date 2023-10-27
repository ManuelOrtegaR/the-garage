/* eslint-disable react/prop-types */
import {
  UserContainer,
  NavLinkStyled,
  IconContainer,
} from "./ComponentsStyles";
import basketIcon from "../../../assets/images/nav/basketIconW.svg";
import { useNavigate } from "react-router-dom";
import { Badge, Dropdown, NavDropdown } from "react-bootstrap";
import { useCart } from "../../thegarage/store";

import { BtnDangerSubmitStyled } from "../../components";
import { useEffect, useState } from "react";
import socket from "../../../src/socket";
import { set } from "date-fns";

export const UserLogged = ({ user }) => {
  const { state } = useCart();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/ShoppingCart");
  };
  const total = state.reduce((acc, company) => {
    return acc + company.totalItems;
  }, 0);

  const [countMessages, setCountMessages] = useState(0);
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    socket.on("notificacion", (payload) => {
      if (payload.emailDestino === user.profileData.correo) {
        setNotification([...notification, payload]);
        setCountMessages(countMessages + 1);
      }
    });

    return () => {
      socket.off("notificacion");
    };
  }, [user.profileData, notification]);

  const handleClickNot = (idConversation) => {
    navigate(`/profile/messages/${idConversation}`);

    const filtered = notification.filter(
      (n) => n.conversacionId !== idConversation
    );
    setNotification(filtered);

    // setCountMessages(countMessages - 1);
  };

  useEffect(() => {
    setCountMessages(notification.length);
  }, [notification]);

  function generateUniqueKey() {
    return Math.random().toString(36).substr(2, 9);
  }

  return (
    <>
      <UserContainer>
        <NavLinkStyled className={"nav-link"} to={"/profile"}>
          {user.name}
        </NavLinkStyled>
        <IconContainer borderRadius="50%" src={user.profileData.url_foto} />

        {countMessages > 0 && (
          <Dropdown as="div" className="dropstart">
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              <i className="bi bi-envelope-plus-fill"></i> {countMessages}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {notification.map((n) => {
                return (
                  <Dropdown.Item
                    key={generateUniqueKey}
                    onClick={() => handleClickNot(n.conversacionId)}
                  >
                    <div className="d-flex gap-2">
                      {" "}
                      <img
                        style={{ width: 30, borderRadius: "50%" }}
                        src={n.foto}
                        alt=""
                      />
                      {n.autor} te envio un mensaje sobre la orden {n.orden}
                    </div>
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        )}

        {user.userClass === "Cliente" && (
          <>
            <IconContainer
              onClick={handleClick}
              maxWidth="25px"
              src={basketIcon}
              data-cy="btn-cart"
            />
            <Badge bg="secondary">{total}</Badge>
          </>
        )}
      </UserContainer>
    </>
  );
};
