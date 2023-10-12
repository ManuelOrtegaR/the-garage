import { Card } from "react-bootstrap";

import { CardStoreStyle, IconStyled } from "./StyledsComponentsProducts";

import { format } from "date-fns";

export const CardValorations = ({ item }) => {
  return (
    <>
      <CardStoreStyle>
        {/* <Card.Header>AutoParts</Card.Header> */}
        <Card.Body>
          <Card.Title>
            <img
              src={
                item.cliente.usuario.url_foto
                  ? item.cliente.usuario.url_foto
                  : "https://res.cloudinary.com/db9nfgjqr/image/upload/v1697054977/default_image/istockphoto-1316420668-612x612_xcyynq.jpg"
              }
              className="rounded-circle object-fit-cover"
              width={30}
              height={30}
            />
            <strong>{item.cliente.nombre_completo} - </strong>

            {format(new Date(item.fecha_creacion), "dd/MM/yyyy HH:mm")}
          </Card.Title>

          <Card.Text>
            <p>{item.comentarios}</p>
            {[...Array(item.calificacion)].map((_, index) => (
              <IconStyled key={index} className="bi bi-star-fill"></IconStyled>
            ))}
            <span> ({item.calificacion}) </span>
          </Card.Text>
        </Card.Body>
      </CardStoreStyle>
    </>
  );
};
