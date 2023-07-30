import Form from 'react-bootstrap/Form';
//import Button from "react-bootstrap/Button";
import { ButtonStyled } from '../../../auth/components/StyledsComponents';
import { FinishBtnStyle } from '../profiles/StylesComponentsProfiles';
import { Col, Row } from 'react-bootstrap';

export const ProductsForm = () => {
  return (
    <div className="singup w-100 m-auto ">
      <div className="singup__contenedor p-4 m-1 rounded-5 p-3 mb-2 bg-white text-dark">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fs-6 fw-bold">Nuevo Producto </span>
          <FinishBtnStyle>Volver</FinishBtnStyle>
        </div>
        <Form className="product_Form mt-4">
          <div className="d-flex justify-content-between align-items-center">
            <Form.Group
              as={Row}
              className="mb-3 w-50"
              controlId="formBasicProdRef"
            >
              <Form.Label column sm="2">
                Referencia
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el código o Referencia del producto"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 w-50"
              controlId="formBasicProdName"
            >
              <Form.Label column sm="4">
                Nombre de Producto
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre del producto"
                />
              </Col>
            </Form.Group>
          </div>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formBasicProdDescription"
          >
            <Form.Label column sm="1">
              Descripción
            </Form.Label>
            <Col>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Ingrese la descripción del producto"
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formBasicProdDescription"
          >
            <Form.Label column sm="1">
              Ficha tecnica:
            </Form.Label>
            <Col>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Ingrese la dicha tecnica del producto"
              />
            </Col>
          </Form.Group>

          <div className="d-flex justify-content-around align-items-center">
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formBasicProdPrice"
            >
              <Form.Label column sm="4">
                Precio COP
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el precio del producto sin IVA"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicProdTax">
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
              className="mb-3"
              controlId="formBasicProdUnits"
            >
              <Form.Label column sm="3">
                Unidades Disponibles{' '}
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Ingrese las unidades disponibles"
                />
              </Col>
            </Form.Group>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Form.Group
              as={Row}
              className="align-items-center"
              controlId="formBasicProdAvailability"
            >
              <Form.Label column sm="4">
                Tipo de Despacho
              </Form.Label>
              <Col>
                <div>
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id="ch_tienda"
                    label="recoger en tienda"
                  />

                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id="ch_domicilio"
                    label="envío domicilio"
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="align-items-center"
              controlId="formProdFileIMG"
            >
              <Form.Label column sm="3">
                Imagen del producto
              </Form.Label>
              <Col>
                <Form.Control type="file" size="sm" />
              </Col>
            </Form.Group>

            <ButtonStyled variant="primary" type="submit">
              Guardar
            </ButtonStyled>
          </div>
        </Form>
      </div>
    </div>
  );
};
