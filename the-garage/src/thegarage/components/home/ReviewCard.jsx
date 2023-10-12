import Card from "react-bootstrap/Card";
import { StarRating } from "./StarRating";

import { format } from "date-fns";

export const ReviewCard = ({ item }) => {
  return (
    <Card border="main-color" style={{ width: "18rem" }}>
      <Card.Header>
        <Card.Img
          variant="top"
          src={
            item.cliente.usuario.url_foto
              ? item.cliente.usuario.url_foto
              : "https://res.cloudinary.com/db9nfgjqr/image/upload/v1697054977/default_image/istockphoto-1316420668-612x612_xcyynq.jpg"
          }
          style={{ width: 30, border: "1px solid gray" }}
          className="rounded-circle object-fit-cover "
        />
        <span> {item.cliente.nombre_completo}</span>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          {format(new Date(item.fecha_creacion), "dd/MM/yyyy HH:mm")}
        </Card.Title>
        <Card.Text>{item.comentarios}</Card.Text>
        <div className="d-flex justify-content-center">
          <StarRating itemRating={item.calificacion} />
        </div>
      </Card.Body>
    </Card>
  );
};
