import {
  NavItemStyled,
  ButtonStyled,
  NavLinkStyled,
  NavStyled,
} from "./StyledsComponents";
import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

function CompanySingUp() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <NavStyled>
            <NavItemStyled>
              <NavLinkStyled eventKey="first">
                Información General
              </NavLinkStyled>
            </NavItemStyled>
            <NavItemStyled>
              <NavLinkStyled eventKey="second">Datos de Contacto</NavLinkStyled>
            </NavItemStyled>
            <NavItemStyled>
              <NavLinkStyled eventKey="third">Información Legal</NavLinkStyled>
            </NavItemStyled>
          </NavStyled>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Nombre o Razón Social</Form.Label>
                  <Form.Control
                    type="texto"
                    placeholder="Ingrese su Nombre o Razón Social"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Ingrese su correo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label>Confirmar Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirme su contraseña"
                  />
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <ButtonStyled
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="w-100"
                  >
                    Continuar
                  </ButtonStyled>
                </div>
              </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Form>
                <Form.Group className="mb-3" controlId="formContactCity">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    type="texto"
                    placeholder="Ingrese la ciudad de ubicación"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formContactAddress">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="texto"
                    placeholder="Ingrese su dirección"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formContactPhone">
                  <Form.Label>Teléfono fijo/movil</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Ingrese su numero de teléfono"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formContact">
                  <Form.Label>Página WEB </Form.Label>
                  <Form.Control
                    type="texto"
                    placeholder="Ingrese la URL de su página WEB"
                  />
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <ButtonStyled
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="w-100"
                  >
                    Continuar
                  </ButtonStyled>
                </div>
              </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Form>
                <Form.Group className="mb-3" controlId="formLInfo">
                  <Form.Label>NIT</Form.Label>
                  <Form.Control
                    type="texto"
                    placeholder="Ingrese el NIT de la empresa"
                  />
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
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default CompanySingUp;
