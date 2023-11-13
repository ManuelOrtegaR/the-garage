/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { format } from 'date-fns';

import { StarRating } from './StarRating';

export const ReviewCard = ({ item }) => {
  return (
    <Card border="main-color" style={{ width: '18rem' }}>
      <Card.Header>
        <Row className="d-flex align-items-center ">
          <Col className="col-4">
            <Card.Img
              variant="top"
              src={
                item.cliente.usuario.url_foto
                  ? item.cliente.usuario.url_foto
                  : 'https://res.cloudinary.com/db9nfgjqr/image/upload/v1697054977/default_image/istockphoto-1316420668-612x612_xcyynq.jpg'
              }
              style={{ width: 50, border: '1px solid gray' }}
              className="rounded-circle object-fit-cover "
            />
          </Col>
          <Col className="col-8">
            <span>{item.cliente.nombre_completo} </span>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="text-main-color" style={{ fontWeight: 'bold' }}>
          Opinion sobre {item.producto.nombre}
        </Card.Title>
        <Card.Text>{item.comentarios}</Card.Text>
        <Card.Text className="d-flex justify-content-end">
          {format(new Date(item.fecha_creacion), 'dd/MM/yyyy HH:mm')}
        </Card.Text>
        <div className="d-flex justify-content-center">
          <StarRating itemRating={item.calificacion} />
        </div>
      </Card.Body>
    </Card>
  );
};
