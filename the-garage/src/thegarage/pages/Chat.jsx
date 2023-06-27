import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Form,
  Button,
  Stack,
} from "react-bootstrap";

export const Chat = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h2>Mis mensajes</h2>

          <Stack gap={2}>
            <div className=" border p-2 bg-light">
              <h4>Almacen 1</h4>
              <p>Ultimo mensaje</p>
            </div>
            <div className=" border p-2 bg-light">
              <h4>Almacen 2</h4>
              <p>Ultimo mensaje</p>
            </div>
            <div className=" border p-2 bg-light">
              <h4>Almacen 3</h4>
              <p>Ultimo mensaje</p>
            </div>
            <div className=" border p-2 bg-light">
              <h4>Almacen 4</h4>
              <p>Ultimo mensaje</p>
            </div>
          </Stack>
        </Col>
        <Col className="border" md="6" lg="7" xl="8">
          <ul className="list-unstyled">
            <li className="d-flex justify-content-between mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                width="60"
              />
              <Card>
                <Card.Header className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Brad Pitt</p>
                  <p className="text-muted small mb-0">
                    <i className="far fa-clock"></i> 12 mins ago
                  </p>
                </Card.Header>
                <Card.Body>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </Card.Body>
              </Card>
            </li>
            <li className="d-flex justify-content-between mb-4">
              <Card className="w-100">
                <Card.Header className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Lara Croft</p>
                  <p className="text-muted small mb-0">
                    <i className="far fa-clock"></i> 13 mins ago
                  </p>
                </Card.Header>
                <Card.Body>
                  <p className="mb-0">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </Card.Body>
              </Card>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                width="60"
              />
            </li>
            <li className="d-flex justify-content-between mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                width="60"
              />
              <Card>
                <Card.Header className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Brad Pitt</p>
                  <p className="text-muted small mb-0">
                    <i className="far fa-clock"></i> 10 mins ago
                  </p>
                </Card.Header>
                <Card.Body>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </Card.Body>
              </Card>
            </li>
            <li className="bg-white mb-3">
              <Form.Group className="mb-3" controlId="textAreaExample">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
            </li>
            <Stack direction="horizontal" gap={3}>
              <Form.Control
                className="me-auto"
                placeholder="Escribe tu mensaje"
              />
              <Button variant="secondary">Submit</Button>
              <div className="vr" />
              <Button variant="outline-danger">Reset</Button>
            </Stack>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
