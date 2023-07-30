import Form from 'react-bootstrap/Form';
//import Button from "react-bootstrap/Button";
import { ButtonStyled } from '../../../auth/components/StyledsComponents';
import { FinishBtnStyle } from '../profiles/StylesComponentsProfiles';
import { Col, Row } from 'react-bootstrap';

export const ServicesForm = () => {
  return (
    <div className="singup w-100 m-auto ">
      <div className="singup__contenedor p-4 m-1 rounded-5 p-3 mb-2 bg-white text-dark">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fs-6 fw-bold">Nuevo Servicio </span>
          <FinishBtnStyle>Volver</FinishBtnStyle>
        </div>
        <Form className="product_Form mt-4">
          <div className="d-flex justify-content-between align-items-center">
            <Form.Group as={Row} className="mb-3 w-50" controlId="formBasicRef">
              <Form.Label column sm="2">
                Referencia
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el código o Referencia del servicio"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 w-50"
              controlId="formBasicName"
            >
              <Form.Label column sm="4">
                Nombre de Servicio
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre del servicio"
                />
              </Col>
            </Form.Group>
          </div>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formBasicDescription"
          >
            <Form.Label column sm="1">
              Descripción
            </Form.Label>
            <Col>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Ingrese la descripción del servicio"
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formBasicDescription"
          >
            <Form.Label column sm="1">
              Ficha tecnica
            </Form.Label>
            <Col>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Ingrese la ficha tecnica del servicio"
              />
            </Col>
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <Form.Group as={Row} controlId="formBasicPrice">
              <Form.Label column sm="3">
                Precio
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el precio del servicio sin IVA"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBasicTax">
              <Form.Label column sm="3">
                IVA %{' '}
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el porcetaje de IVA"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="align-items-center"
              controlId="formBasicAvailability"
            >
              <Form.Label column sm="4 me-5">
                Disponibilidad
              </Form.Label>
              <Col>
                <div>
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id="ch_tienda"
                    label="En tienda sin cita"
                  />
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id="ch_tienda"
                    label="En tienda con cita"
                  />

                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id="ch_domicilio"
                    label="Domicilio"
                  />
                </div>
              </Col>
            </Form.Group>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Form.Group
              as={Row}
              className=" align-items-center me-5"
              controlId="formFileIMG"
            >
              <Form.Label column sm="4">
                Imagen del servicio
              </Form.Label>
              <Col>
                <Form.Control type="file" size="sm" />
              </Col>
            </Form.Group>

            <ButtonStyled
              className="text-center fs-5 align-items-center"
              variant="primary"
              type="submit"
              style={{ height: 30 }}
            >
              Guardar
            </ButtonStyled>
          </div>
        </Form>
      </div>
    </div>
  );
};
