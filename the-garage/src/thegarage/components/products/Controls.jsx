/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';

import { ContainerBadgeStyled } from './StyledsComponentsProducts';
import { BreadCrumbRoute } from './BreadCrumbRoute';
import { BtnSubmitStyled } from '../../../components';

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
