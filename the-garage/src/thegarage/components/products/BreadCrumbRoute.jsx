import { Breadcrumb } from "react-bootstrap";
import { ContainerBreadcumStyled } from "./StyledsComponentsProducts";

// import { useHistory } from "react-router-dom";

export const BreadCrumbRoute = () => {
  // const location = useLocation();
  // const navigate = useNavigate();

  // // const currentPath = history.location.pathname;
  // console.log(location);
  return (
    <div>
      <ContainerBreadcumStyled>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Productos</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Carros</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Repuestos</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Llantas</Breadcrumb.Item>
          {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
        </Breadcrumb>
      </ContainerBreadcumStyled>
    </div>
  );
};
