import { Card } from "react-bootstrap";
import { BtnSubmitStyled } from "../../../components";
import { CardStoreStyle } from "./StyledsComponentsProducts";
import { useNavigate } from "react-router-dom";

export const CardStore = ({ item }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/productos");
  }
  return (
    <>
      <CardStoreStyle>
        <Card.Body>
          <Card.Title>{item.empresa.razon_social}</Card.Title>
          <Card.Text>{item.empresa.descripcion}</Card.Text>
          <div className="d-flex justify-content-end">
            <BtnSubmitStyled onClick={handleClick} width="40%">
              Ver mas productos
            </BtnSubmitStyled>
          </div>
        </Card.Body>
      </CardStoreStyle>
    </>
  );
};
