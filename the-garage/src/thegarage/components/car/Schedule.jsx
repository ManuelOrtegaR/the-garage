import { Form } from "react-bootstrap";
import { ContainerSheduleStyled, PriceStyled } from "./StylesComponentsCar";

export const Schedule = () => {
  return (
    <ContainerSheduleStyled className="pt-4">
      <div className="row">
        <Form.Group controlId="dob">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-3 align-items-center">
              <Form.Label>Fecha: </Form.Label>
              <Form.Control
                type="date"
                name="dob"
                placeholder="Fecha de agendamiento"
              />
            </div>
            <div className="d-flex">
              <Form.Check
                type="checkbox"
                id="flexCheckChecked0"
                label="Servicio en Taller"
                inline
              />
              <Form.Check
                type="checkbox"
                id="flexCheckChecked1"
                label="Servicio en Domicilio"
                inline
              />
            </div>
          </div>

          <div className="d-flex justify-content-between gap-5 mt-5 align-items-center">
            <div className="d-flex flex-column vw-100">
              <Form.Label>Observaciones Adicionales</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </div>
            <PriceStyled className="d-flex justify-content-between gap-3">
              <span>Costo de Agendamiento: </span>
              <span>$20.000</span>
            </PriceStyled>
          </div>
        </Form.Group>
      </div>
    </ContainerSheduleStyled>
  );
};
