import {
  Badge,
  Breadcrumb,
  CloseButton,
  Col,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';

export function Controls() {
  return (
    <>
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
            <Badge bg="secondary">
              Calificacion <CloseButton />
            </Badge>
            {/* <span className="close-btn"> &times;</span> */}

            <Badge bg="secondary">
              Categoria <CloseButton />
            </Badge>
            {/* <span className="close-btn"> &times;</span> */}

            <Badge bg="secondary">
              Almacen <CloseButton />
            </Badge>
            {/* <span className="close-btn"> &times;</span> */}

            <Badge bg="secondary">
              Precio <CloseButton />
            </Badge>
            {/* <span className="close-btn"> &times;</span> */}

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
    </>
  );
}
