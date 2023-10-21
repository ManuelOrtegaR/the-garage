import { format } from 'date-fns';
import {
  ItemStyle,
  ListGroupStyle,
  ShowOrder,
  StatusStyle,
} from './StylesComponentsProfiles';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { PaginationProfiles } from './PaginationProfiles';
import { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../auth/context/AuthContext';
import { useCompanyApprove } from '../../../domain/useCompanyApprove';

export const Requests = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { data: responseData } = useCompanyApprove();
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const initialData = useRef(null);

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
    <div className="w-100 m-3">
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
                <Image
                  src={company.url_foto}
                  style={{ height: 65, width: 65 }}
                />
                <span className="col-2">{company.empresa.razon_social}</span>
                <span className="col-1">
                  NIT: {company.empresa.numero_documento_empresa}
                </span>
                <span className="col-2">
                  {format(new Date(company.fecha_creacion), 'dd/MM/yyyy')}
                </span>
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
