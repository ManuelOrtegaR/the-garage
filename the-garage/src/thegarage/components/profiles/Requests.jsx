/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { format } from 'date-fns';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

import { AuthContext } from '../../../auth/context/AuthContext';
import { useCompanyApprove } from '../../../domain/useCompanyApprove';
import { PaginationProfiles } from './PaginationProfiles';
import {
  ItemStyle,
  ListGroupStyle,
  ShowOrder,
  StatusStyle,
} from './StylesComponentsProfiles';

export const Requests = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { data: responseData } = useCompanyApprove();
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const initialData = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const [requestBypage, setRequestByPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalRequests = data.length;

  useEffect(() => {
    if (responseData) {
      setData(responseData);
      initialData.current = responseData;
    }
  }, [responseData]);

  const lastIndex = currentPage * requestBypage;
  const firstIndex = lastIndex - requestBypage;

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue === '') {
      setData(initialData.current);
    } else {
      const filtered = initialData.current.filter((account) => {
        return account.empresa.razon_social
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setData(filtered);
    }
  }, [searchValue]);

  return (
    <div className="w-75 m-auto">
      <span className="fw-bold">Solicitud de Empresas</span>

      <div className="d-flex justify-content-between my-3">
        <Form.Control
          type="search"
          placeholder="Buscar Por Nombre"
          className="me-2 w-50"
          aria-label="Search"
          value={searchValue}
          onChange={onSearchChange}
        />
      </div>

      <ListGroupStyle>
        {data
          .map((company, index) => (
            <div key={index}>
              <ItemStyle key={company.id} className="border-bottom">
                {viewportWidth > 800 && (
                  <Image
                    src={company.url_foto}
                    style={{ height: 65, width: 65 }}
                  />
                )}
                <span className="col-2 col-md-2">
                  {company.empresa.razon_social}
                </span>
                <span className="col-2 col-md-2">
                  NIT: {company.empresa.numero_documento_empresa}
                </span>
                <span className="col-2 col-md-2">
                  {format(new Date(company.fecha_creacion), 'dd/MM/yyyy')}
                </span>
                <div className="col-1 col-md-2">
                  {viewportWidth > 800 ? (
                    <StatusStyle className="Enviada">
                      {company.estatus}
                    </StatusStyle>
                  ) : (
                    <StatusStyle
                      className="Enviada"
                      style={{ paddingLeft: '10px', paddingRight: '10px' }}
                    ></StatusStyle>
                  )}
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
