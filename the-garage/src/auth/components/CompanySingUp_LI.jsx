import { BtnSubmitStyled } from "../../components/StyledButtons";
import Form from "react-bootstrap/Form";

function CompanySingUp_LI() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formLInfo">
        <Form.Label>NIT</Form.Label>
        <Form.Control type="texto" placeholder="Ingrese el NIT de la empresa" />
      </Form.Group>
      <Form.Group controlId="formFileCCommerce" className="mb-3">
        <Form.Label>Cámara de Comercio</Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group>
      <Form.Group controlId="formFileIMG" className="mb-3">
        <Form.Label>Imagen o Logo</Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group>
      <div className="d-flex justify-content-center">
        <BtnSubmitStyled>Guardar</BtnSubmitStyled>
      </div>
    </Form>
  );
}
export default CompanySingUp_LI;
