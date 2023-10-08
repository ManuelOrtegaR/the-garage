import { Card } from "react-bootstrap";

import { CardStoreStyle, IconStyled } from "./StyledsComponentsProducts";

import { format } from "date-fns";

export const CardValorations = ({ item }) => {
  return (
    <>
      <CardStoreStyle>
        {/* <Card.Header>AutoParts</Card.Header> */}
        <Card.Body>
          <Card.Title>{item.cliente.nombre_completo + " comento:"}</Card.Title>

          <Card.Text>
            <p>{format(new Date(item.fecha_creacion), "dd/MM/yyyy HH:mm")}</p>
            <p>{item.comentarios}</p>
            {[...Array(item.calificacion)].map((_, index) => (
              <IconStyled key={index} className="bi bi-star-fill"></IconStyled>
            ))}
            <span> ({item.calificacion}) estrellas </span>
          </Card.Text>
        </Card.Body>
      </CardStoreStyle>
    </>
  );
};
