import {
  ItemStyle,
  ListGroupStyle,
  ShowOrder,
  StatusStyle,
} from './StylesComponentsProfiles';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { PaginationProfiles } from './PaginationProfiles';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../auth/context/AuthContext';
import { useCompanyApprove } from '../../../domain/useCompanyApprove';

export const Requests = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { data } = useCompanyApprove();

  const [requestBypage, setRequestByPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalRequests = data.length;

  const lastIndex = currentPage * requestBypage;
  const firstIndex = lastIndex - requestBypage;

  return (
    <div className="w-100 m-3">
      <span className="fw-bold">Solicitud de Empresas</span>

      <div className="d-flex justify-content-between my-3">
        <Form.Control
          type="search"
          placeholder="Buscar Por Nombre"
          className="me-2 w-50"
          aria-label="Search"
        />
        <div className="d-flex text-nowrap align-items-center">
          <span>Ordenar por: </span>
          <select className="form-select" aria-label="Default select example">
            <option selected>Todo</option>
            <option value="1">Estado</option>
            <option value="2">Fecha</option>
            <option value="3">Tienda</option>
          </select>
        </div>
      </div>

      <ListGroupStyle>
        {data
          .map((company, index) => (
            <div key={index}>
              <ItemStyle key={company.id} className="border-bottom">
                <Image
                  src={company.url_foto}
                  style={{ height: 65, width: 65 }}
                />
                <span className="col-2">{company.empresa.razon_social}</span>
                <span className="col-1">
                  NIT: {company.empresa.numero_documento_empresa}
                </span>
                <span className="col-2 fw-bold fs-5 ">fecha de solicitud</span>
                <div className="col-2">
                  <StatusStyle className="Pagada">
                    {company.estatus}
                  </StatusStyle>
                </div>
                <ShowOrder
                  onClick={() => {
                    navigate(`${company.id}`, { state: company.id });
                  }}
                >
                  <i
                    className="bi bi-eye-fill"
                    style={{ width: '20px', height: '20px' }}
                  />
                </ShowOrder>
              </ItemStyle>
            </div>
          ))
          .slice(firstIndex, lastIndex)}
      </ListGroupStyle>

      <PaginationProfiles
        byPage={requestBypage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={totalRequests}
      />
    </div>
  );
};
