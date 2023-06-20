import { Accordion, Badge, Form, ListGroup } from "react-bootstrap";

function Filter() {
  return (
    <>
      <div className="d-flex flex-column  gap-5 vh-100 pt-5">
        <div>
          <span>FILTRAR POR:</span>
        </div>
        <div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Categorias</Accordion.Header>
              <Accordion.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                      <a href="#" className="text-dark">
                        Suspension
                      </a>
                      <Badge bg="secondary" pill>
                        120
                      </Badge>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                      <a href="#" className="text-dark">
                        Electronics
                      </a>
                      <Badge bg="secondary" pill>
                        120
                      </Badge>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between">
                      <a href="#" className="text-dark">
                        Mecanica
                      </a>
                      <Badge bg="secondary" pill>
                        120
                      </Badge>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Marcas</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check
                    type="checkbox"
                    id="flexCheckChecked1"
                    label="Mercedes"
                  />
                  <Badge bg="secondary" pill>
                    120
                  </Badge>
                </div>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check
                    type="checkbox"
                    id="flexCheckChecked1"
                    label="Mercedes"
                  />
                  <Badge bg="secondary" pill>
                    145
                  </Badge>
                </div>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check
                    type="checkbox"
                    id="flexCheckChecked1"
                    label="Mercedes"
                  />
                  <Badge bg="secondary" pill>
                    150
                  </Badge>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Precio</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check
                    type="checkbox"
                    id="flexCheckChecked1"
                    label="0 - 100.000"
                  />
                  <Badge bg="secondary" pill>
                    120
                  </Badge>
                </div>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check
                    type="checkbox"
                    id="flexCheckChecked1"
                    label="100.000 - 200.000"
                  />
                  <Badge bg="secondary" pill>
                    145
                  </Badge>
                </div>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check
                    type="checkbox"
                    id="flexCheckChecked1"
                    label="200.000 300.000"
                  />
                  <Badge bg="secondary" pill>
                    150
                  </Badge>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Calificacion</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check type="checkbox" id="flexCheckDefault" checked>
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </Form.Check.Label>
                  </Form.Check>
                </div>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check type="checkbox" id="flexCheckDefault" checked>
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </Form.Check.Label>
                  </Form.Check>
                </div>
                <div className="d-flex justify-content-between pb-2 pe-3">
                  <Form.Check type="checkbox" id="flexCheckDefault" checked>
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Filter;
