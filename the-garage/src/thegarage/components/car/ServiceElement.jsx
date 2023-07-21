import { Card } from "react-bootstrap";
import { CardElementStyle, PriceStyled } from "./StylesComponentsCar";

export const ServiceElement = () => {
  return (
    <CardElementStyle className="pt-4">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img src="https://placehold.co/65x65" />
          </div>
          <div>{"Colorimentria para autos, mezcla entrega y pintura"}</div>
          <PriceStyled>{"$ 30.000 - $50.000"}</PriceStyled>
        </div>
      </Card.Body>
    </CardElementStyle>
  );
};
