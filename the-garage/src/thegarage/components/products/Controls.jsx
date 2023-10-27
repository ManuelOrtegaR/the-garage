/* eslint-disable react/prop-types */
import { Badge, Col } from 'react-bootstrap';
import { ContainerBadgeStyled } from './StyledsComponentsProducts';
import { BreadCrumbRoute } from './BreadCrumbRoute';
import { BtnSubmitStyled } from '../../../components';
import { useNavigate } from 'react-router-dom';

export function Controls({
  filters,
  clean,
  setCurrentPage,
  setFiltrosSeleccionadosAgrupados,
}) {
  const navigate = useNavigate();
  const cleanAll = () => {
    clean();
    setCurrentPage(0);
    setFiltrosSeleccionadosAgrupados({});
    navigate('/productos');
  };

  return (
    <>
      <Col className="col-12 col-md-6 mt-2">
        <BreadCrumbRoute />
      </Col>
      <Col className="col-12 col-md-5 mt-2 d-flex align-items-center justify-content-end">
        <ContainerBadgeStyled>
          {filters.map((filter) => (
            <Badge key={filter} bg="secondary">
              {filter + '   '}
              <i className="bi bi-info-circle-fill"></i>
            </Badge>
          ))}
        </ContainerBadgeStyled>
        {/* aqui van controles de filtros por ordenamiento o el avance que lleva */}
      </Col>
      <Col className="col-12 col-md-1 d-flex justify-content-end align-items-center mt-2">
        <BtnSubmitStyled variant="success" onClick={cleanAll}>
          Limpiar
        </BtnSubmitStyled>
      </Col>
    </>
  );
}
