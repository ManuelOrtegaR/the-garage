import { Button, Card } from "react-bootstrap";
import styled from "@emotion/styled";

const ContainerStyled = styled("div")(({ theme }) => ({
  paddingTop: 20,
  // color: theme.mainColor,
}));
const ContainerButtonStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 1,

  // color: theme.mainColor,
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
  width: "100%",

  // color: theme.mainColor,
}));

export function Item() {
  return (
    <ContainerStyled>
      <Card style={{ width: "17rem" }}>
        <Card.Img variant="top" src="https://placehold.co/288x196" />
        <Card.Body>
          <Card.Title>Refrigerante</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Card.Text className="fs-4">
            <strong>$120.000</strong>
          </Card.Text>
          <Card.Text className="d-flex">
            <i className="bi bi-check2-circle">Disponible para despacho</i>
            <i className="bi bi-check2-circle">Disponible para retiro</i>
          </Card.Text>
          <Card.Text>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star"></i>
            <span>(4)</span>
          </Card.Text>
          <ContainerButtonStyled>
            <ButtonStyle variant="success">
              <i className="bi bi-cart-plus"></i> Agregar al Carrito
            </ButtonStyle>
            <Button className="px-1 w-100" variant="primary">
              <i className="bi bi-cart-plus"></i> Ver Detalle
            </Button>
            {/* <Button className="px-4" variant="primary">
              Ver Detalle
            </Button> */}
          </ContainerButtonStyled>
        </Card.Body>
      </Card>
    </ContainerStyled>
  );
}
