import { Card } from "react-bootstrap";
import { BtnSubmitStyled } from "../../../components";
import { CardStoreStyle, IconStyled } from "./StyledsComponentsProducts";
import { useNavigate } from "react-router-dom";

export const CardValorations = ({ item }) => {
  return (
    <>
      <CardStoreStyle>
        {/* <Card.Header>AutoParts</Card.Header> */}
        <Card.Body>
          <Card.Title>{item.cliente.nombre_completo + " comento:"}</Card.Title>
          <Card.Text>{item.comentarios}</Card.Text>
          <Card.Text>
            {[...Array(item.calificacion)].map((_, index) => (
              <IconStyled key={index} className="bi bi-star-fill"></IconStyled>
            ))}
          </Card.Text>
        </Card.Body>
      </CardStoreStyle>
    </>
  );
};
