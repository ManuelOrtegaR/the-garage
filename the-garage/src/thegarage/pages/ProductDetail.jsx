import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import { BtnDangerSubmitStyled, BtnSubmitStyled } from "../../components";
import {
  ButtonStyledDetail,
  ButtonStyledSuccess,
  Controls,
  H4Styled,
  Item,
} from "../components";
import { BreadCrumbRoute } from "../components/products/BreadCrumbRoute";
import { detail1_MockTest, detail2_MockTest } from "../dataTest/dataMock";

export function ProductDetail() {
  return (
    <Container>
      <Row>
        <BreadCrumbRoute />
      </Row>
      <div className="pt-5 pb-5">
        <Row className="mt-5">
          <Col className="" md={6} sm={12}>
            <H4Styled>{"ACEITE kh-89273"}</H4Styled>

            <div className="pt-2">
              <div>
                <img src="https://placehold.co/600x600" alt="" />
              </div>
              <div className="d-flex gap-3 border-bottom pt-2 pb-2">
                <img
                  className="border border-dark-subtle"
                  src="https://placehold.co/70x70"
                  alt=""
                />
                <img
                  className="border border-dark-subtle"
                  src="https://placehold.co/70x70"
                  alt=""
                />
                <img
                  className="border border-dark-subtle"
                  src="https://placehold.co/70x70"
                  alt=""
                />
                <img
                  className="border border-dark-subtle"
                  src="https://placehold.co/70x70"
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Descripcion</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Ficha tecnica</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="pb-5 pt-5">
              <Card>
                <Card.Body>
                  <Card.Title>Pastillas Frenos traseros</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Codigo: 9848793
                  </Card.Subtitle>
                  <Card.Text>
                    <div>
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </div>
                    <div className="fs-4">$200,000</div>
                    <div>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i>
                      <div>(4)</div>
                    </div>

                    <div className="  d-flex justify-content-center">
                      <Button className="border px-3" variant="light">
                        -
                      </Button>
                      <div className="px-3">5</div>
                      <Button className=" border px-3" variant="light">
                        {" "}
                        +{" "}
                      </Button>
                    </div>
                  </Card.Text>

                  <div className="pt-1">
                    {/* <Card.Link href="#"> */}
                    <BtnSubmitStyled width="100%">
                      <i className="bi bi-cart-plus"></i> Agregar al Carrito
                    </BtnSubmitStyled>
                    {/* </Card.Link> */}
                  </div>
                  <div className="pt-1">
                    {/* <Card.Link href="#"> */}
                    <BtnDangerSubmitStyled width="100%">
                      <i className="bi bi-box-arrow-left"></i> Salir
                    </BtnDangerSubmitStyled>
                    {/* </Card.Link> */}
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="mb-3">DATOS ALMACEN</div>
            <Card>
              <Card.Header>Almacen: AutoParts</Card.Header>
              <Card.Body>
                <Card.Title>AutoParts: el mejor distribuidor</Card.Title>
                <Card.Text>
                  En nuestro almacén, contamos con un extenso catálogo de
                  repuestos que abarca desde piezas de automóviles, como frenos,
                  filtros, correas y baterías, hasta repuestos para maquinaria
                  pesada, como motores, transmisiones, componentes hidráulicos y
                  eléctricos. Trabajamos con los principales fabricantes y
                  proveedores de repuestos reconocidos en el mercado, lo que nos
                  permite ofrecer productos de confianza y duraderos.
                </Card.Text>
                <BtnSubmitStyled to="/productos" width="100%">
                  Ver mas productos
                </BtnSubmitStyled>
              </Card.Body>
            </Card>
            <div className="pt-5">PRODUCTOS RECOMENDADOS</div>
            <div className="d-flex  flex-wrap justify-content-between ">
              <Item className="w-50" key={1} item={detail1_MockTest} />
              <Item className="w-50" key={2} item={detail2_MockTest} />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
