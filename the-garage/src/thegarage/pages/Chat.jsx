import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Stack,
  Navbar,
} from "react-bootstrap";
import {
  ButtonStyledDetail,
  ButtonStyledSuccess,
  MessageBrandStyled,
  MessageDivStyled,
  MessageNavbarStyled,
} from "../components";

export const Chat = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <Stack className="gap-2">
            <div className=" border p-2 bg-secondary">
              <h2>Mensajes</h2>
            </div>
            <MessageNavbarStyled>
              <Container>
                <MessageBrandStyled href="#home">
                  <h4>Almacen 1</h4>
                  <p>Ultimo mensaje</p>
                </MessageBrandStyled>
              </Container>
            </MessageNavbarStyled>
            <MessageNavbarStyled>
              <Container>
                <MessageBrandStyled href="#home">
                  <h4>Almacen 1</h4>
                  <p>Ultimo mensaje</p>
                </MessageBrandStyled>
              </Container>
            </MessageNavbarStyled>
            <MessageNavbarStyled>
              <Container>
                <MessageBrandStyled href="#home">
                  <h4>Almacen 1</h4>
                  <p>Ultimo mensaje</p>
                </MessageBrandStyled>
              </Container>
            </MessageNavbarStyled>
            {/* <MessageDivStyled className=" border p-2 ">
              <h4>Almacen 4</h4>
              <p>Ultimo mensaje</p>
            </MessageDivStyled> */}
          </Stack>
        </Col>
        <Col className="border" md="6" lg="7" xl="8">
          <Stack className="pt-5 pb-2">
            <div className=" d-flex justify-content-between mb-4">
              <img
                src="https://placehold.co/60x60"
                alt="UserProfile"
                className="rounded-circle align-self-start me-2 "
              />
              <Card>
                <Card.Header className="d-flex justify-content-between ">
                  <p className="fw-bold">{"Usuario Prueba"}</p>
                </Card.Header>
                <Card.Body>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className=" d-flex justify-content-between mb-3">
              <Card>
                <Card.Header className="d-flex justify-content-between ">
                  <p className="fw-bold">{"Usuario Prueba"}</p>
                </Card.Header>
                <Card.Body>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </Card.Body>
              </Card>
              <img
                src="https://placehold.co/60x60"
                alt="UserProfile"
                className="rounded-circle align-self-start ms-2 "
              />
            </div>
            <div className=" d-flex justify-content-between mb-4">
              <img
                src="https://placehold.co/60x60"
                alt="UserProfile"
                className="rounded-circle align-self-start me-2 "
              />
              <Card>
                <Card.Header className="d-flex justify-content-between ">
                  <p className="fw-bold">{"Usuario Prueba"}</p>
                </Card.Header>
                <Card.Body>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div className="bg-white mb-3">
              <Form.Group className="mb-3" controlId="textAreaExample">
                <Form.Label>Mensaje:</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
            </div>
            <Stack direction="horizontal" gap={3}>
              {/* <Form.Control
                className="me-auto"
                placeholder="Escribe tu mensaje"
              /> */}
              <ButtonStyledSuccess variant="secondary">
                Enviar
              </ButtonStyledSuccess>
              <div className="vr" />
              <ButtonStyledDetail variant="danger">Salir</ButtonStyledDetail>
            </Stack>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};
