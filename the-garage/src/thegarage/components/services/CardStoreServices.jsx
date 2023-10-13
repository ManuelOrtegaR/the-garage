import { CardStoreStyle } from "../products";
import { Card } from "react-bootstrap";
import { BtnSubmitStyled } from "../../../components";
import { useNavigate } from "react-router-dom";

export const CardStoreServices = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/servicios");
  }
  return (
    <>
      <CardStoreStyle>
        <Card.Body>
          <Card.Title>{"Mayor-Autos"}</Card.Title>
          <Card.Text>
            En nuestro almacén, contamos con un extenso catálogo de repuestos
            que abarca desde piezas de automóviles, como frenos, filtros,
            correas y baterías, hasta repuestos para maquinaria pesada, como
            motores, transmisiones, componentes hidráulicos y eléctricos.
            Trabajamos con los principales fabricantes y proveedores de
            repuestos reconocidos en el mercado, lo que nos permite ofrecer
            productos de confianza y duraderos.
          </Card.Text>
          <div className="d-flex justify-content-end">
            <BtnSubmitStyled onClick={handleClick} width="40%">
              Ver mas servicios
            </BtnSubmitStyled>
          </div>
        </Card.Body>
      </CardStoreStyle>
    </>
  );
};
