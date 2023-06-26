import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import {
  ButtonStyled,
  TitlePg,
} from "../../../auth/components/StyledsComponents";

function ServicesForm() {
  return (
    <div className="singup col-5 ">
      <div className="singup__contenedor p-4 m-1 rounded-5 p-3 mb-2 bg-white text-dark">
        <TitlePg>Nuevo Servicio </TitlePg>
        <Form className="product_Form">
          <Form.Group className="mb-3" controlId="formBasicRef">
            <Form.Label>Referencia</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el código o Referencia del servicio"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre de Servicio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre del servicio"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Ingrese la descripción del servicio"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el precio del servicio sin IVA"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTax">
            <Form.Label>IVA % </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el porcetaje de IVA"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAvailability">
            <Form.Label>Disponibilidad </Form.Label>
            <div className="mb-3">
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
          </Form.Group>
          <Form.Group controlId="formFileIMG" className="mb-3">
            <Form.Label>Imagen del servicio</Form.Label>
            <Form.Control type="file" size="sm" />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <ButtonStyled
              variant="primary"
              type="submit"
              size="lg"
              className="w-100"
            >
              Guardar
            </ButtonStyled>
          </div>
        </Form>
      </div>
    </div>
  );
}
export default ServicesForm;
