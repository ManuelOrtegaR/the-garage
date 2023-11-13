/* eslint-disable react/prop-types */
import { format } from 'date-fns';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import { CardStoreStyle, IconStyled } from './StyledsComponentsProducts';

export const CardValorations = ({ item }) => {
  return (
    <>
      <CardStoreStyle>
        <Card.Header className="align-content-center ">
          <Image
            src={
              item.cliente.usuario.url_foto
                ? item.cliente.usuario.url_foto
                : 'https://res.cloudinary.com/db9nfgjqr/image/upload/v1697054977/default_image/istockphoto-1316420668-612x612_xcyynq.jpg'
            }
            className="rounded-circle object-fit-cover"
            fluid
            width={50}
          />
          <strong style={{ marginLeft: '20px' }}>
            {item.cliente.nombre_completo} -{' '}
          </strong>
          {format(new Date(item.fecha_creacion), 'dd/MM/yyyy HH:mm')}
        </Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>

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
