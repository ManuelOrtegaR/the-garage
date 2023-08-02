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

export function Controls({ filters, clean, setCurrentPage }) {
  const cleanAll = () => {
    clean();
    setCurrentPage(0);
  };
  return (
    <>
      <Col md={5} className="">
        <BreadCrumbRoute />
      </Col>
      <Col md={6}>
        <ContainerBadgeStyled>
          {filters.map((filter) => (
            <Badge key={filter} bg="secondary">
              {filter}
              <CloseButton />
            </Badge>
          ))}
        </ContainerBadgeStyled>

        {/* aqui van controles de filtros por ordenamiento o el avance que lleva */}
      </Col>
      <Col className="">
        <div className=" d-flex justify-content-end pt-5 ">
          <BtnSubmitStyled variant="success" onClick={cleanAll}>
            Limpiar
          </BtnSubmitStyled>
        </div>
      </Col>
    </>
  );
}
