import { Breadcrumb } from "react-bootstrap";
import { ContainerBreadcumStyled } from "./StyledsComponentsProducts";

export const BreadCrumbRoute = () => {
  return (
    <div>
      <ContainerBreadcumStyled>
        <i className="bi bi-house"></i>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Accesories</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Discounts</Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      </ContainerBreadcumStyled>
    </div>
  );
};
