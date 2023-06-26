import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import {
  ButtonStyled,
  TitlePg,
} from "../../../auth/components/StyledsComponents";

function ProductsForm() {
  return (
    <div className="singup col-5 ">
      <div className="singup__contenedor p-4 m-1 rounded-5 p-3 mb-2 bg-white text-dark">
        <TitlePg>Nuevo Producto </TitlePg>
        <Form className="product_Form">
          <Form.Group className="mb-3" controlId="formBasicProdRef">
            <Form.Label>Referencia</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el código o Referencia del producto"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicProdName">
            <Form.Label>Nombre de Producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre del producto"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicProdDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Ingrese la descripción del producto"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicProdPrice">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el precio del producto sin IVA"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicProdTax">
            <Form.Label>IVA % </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el porcetaje de IVA"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicProdUnits">
            <Form.Label>Unidades Disponibles </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese las unidades disponibles"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicProdAvailability">
            <Form.Label>Tipo de Despacho </Form.Label>
            <div className="mb-3">
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
          </Form.Group>
          <Form.Group controlId="formProdFileIMG" className="mb-3">
            <Form.Label>Imagen del producto</Form.Label>
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
export default ProductsForm;
