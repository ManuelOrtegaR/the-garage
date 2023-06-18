import {
  Accordion,
  Badge,
  Breadcrumb,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  ListGroup,
  Pagination,
  Row,
} from "react-bootstrap";
import Item from "./Item";

function ItemList() {
  return (
    <Container>
      <Row className="">
        <Col md={5} className=" d-flex justify-content-center">
          <div className="d-flex pt-5 gap-2 ">
            <i className="bi bi-house fs-4"></i>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Accesories</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Discounts</Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          {/* aqui van controles de filtros por ordenamiento o el avance que lleva */}
        </Col>
        <Col md={5} className="">
          {/* <div className="d-flex justify-content-between border-bottom  pb-2"></div> */}
          <div className="pt-5 pb-5">
            <div className="d-flex justify-content-between align-items-center pt-1 ">
              <Badge bg="secondary">Filtro 1</Badge>
              <span className="close-btn"> &times;</span>

              <Badge bg="secondary">filtro 2</Badge>
              <span className="close-btn"> &times;</span>

              <Badge bg="secondary">filtro 3</Badge>
              <span className="close-btn"> &times;</span>

              <Badge bg="secondary">Filtro 4</Badge>
              <span className="close-btn"> &times;</span>

              <a href="#"> Borrar todo</a>
            </div>
          </div>
          {/* aqui van controles de filtros por ordenamiento o el avance que lleva */}
        </Col>
        <Col className="">
          <div className=" d-flex justify-content-center pt-5 ">
            <DropdownButton
              id="dropdown-basic-button"
              title="Ordenar por"
              variant="bg-lisght"
              size="sm"
            >
              <Dropdown.Item href="#/action-1">Menor Precio</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Mayor precio</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Calificacion</Dropdown.Item>
            </DropdownButton>
          </div>
          {/* aqui van controles de filtros por ordenamiento o el avance que lleva */}
        </Col>
      </Row>

      <Row className="border-top">
        <Col md={3}>
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
        </Col>
        <Col md={9}>
          <div className="d-flex justify-content-between pt-5 ps-4 pe-5">
            <strong>
              <span> 122 Productos Encontrados</span>
            </strong>
            <div>
              <span>Visualizacion: </span>
              <i className="bi bi-grid-3x3-gap-fill"></i>
              <i className="bi bi-distribute-vertical"></i>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-sm-around pt-5 ">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
          <div className="d-flex justify-content-center pt-3">
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;
