import {
  Badge,
  Breadcrumb,
  CloseButton,
  Col,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { ContainerBadgeStyled } from "./StyledsComponentsProducts";
import { BreadCrumbRoute } from "./BreadCrumbRoute";
import { BtnSubmitStyled } from "../../../components";

export function Controls() {
  return (
    <>
      <Col md={5} className="">
        <BreadCrumbRoute />
      </Col>
      <Col md={6}>
        <ContainerBadgeStyled>
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
        </ContainerBadgeStyled>

        {/* aqui van controles de filtros por ordenamiento o el avance que lleva */}
      </Col>
      <Col className="">
        <div className=" d-flex justify-content-end pt-5 ">
          <BtnSubmitStyled variant="success">Limpiar</BtnSubmitStyled>
          {/* <DropdownButton
            id="dropdown-basic-button"
            title="Ordenar por"
            variant="bg-lisght"
            size="sm"
          >
            <Dropdown.Item href="#/action-1">Menor Precio</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Mayor precio</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Calificacion</Dropdown.Item>
          </DropdownButton> */}
        </div>
        {/* aqui van controles de filtros por ordenamiento o el avance que lleva */}
      </Col>
    </>
  );
}
