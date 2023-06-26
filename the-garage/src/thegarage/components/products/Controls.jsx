import styled from "@emotion/styled";
import {
  Badge,
  Breadcrumb,
  CloseButton,
  Col,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const ContainerBreadcumStyled = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 2,
  paddingTop: "50px",
}));

const BreadcumItemStyled = styled(Breadcrumb.Item)(({ theme }) => ({
  color: theme.colors.mainColor,
  fontFamily: theme.fontFamily.mainFont,
  // fontSize: theme.fonts[4],
}));
const ContainerBadgeStyled = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "50px",
  paddingBottom: "50px",
}));

const Badgestyled = styled(Badge)(({ theme }) => ({
  backgroundColor: theme.colors.mainColor,
}));

export function Controls() {
  return (
    <>
      <Col md={5} className="">
        <ContainerBreadcumStyled>
          <i className="bi bi-house"></i>
          <Breadcrumb>
            <BreadcumItemStyled href="#">Home</BreadcumItemStyled>
            <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Accesories</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Discounts</Breadcrumb.Item>
            <BreadcumItemStyled active>Data</BreadcumItemStyled>
          </Breadcrumb>
        </ContainerBreadcumStyled>
        {/* aqui van controles de filtros por ordenamiento o el avance que lleva */}
      </Col>
      <Col md={5}>
        {/* <div className="d-flex justify-content-between border-bottom  pb-2"></div> */}

        <ContainerBadgeStyled>
          <Badge bg="secondary">
            Calificacion <CloseButton />
          </Badge>
          {/* <span className="close-btn"> &times;</span> */}

          <Badge bg="secondary">
            Categoria <CloseButton />
          </Badge>
          {/* <span className="close-btn"> &times;</span> */}

          <Badgestyled>
            Almacen <CloseButton />
          </Badgestyled>
          {/* <span className="close-btn"> &times;</span> */}

          <Badge bg="warning">
            Precio <CloseButton />
          </Badge>
          {/* <span className="close-btn"> &times;</span> */}

          <a href="#"> Borrar todo</a>
        </ContainerBadgeStyled>

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
