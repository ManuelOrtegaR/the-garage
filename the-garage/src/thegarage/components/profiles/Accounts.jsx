import { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import {
  AccountStatusStyle,
  ItemStyle,
  ListGroupStyle,
} from './StylesComponentsProfiles';
import { PaginationProfiles } from './PaginationProfiles';
import { useAccounts } from '../../../domain/useAccounts';
import { companyDecision } from '../../../api/admin';

export const Accounts = () => {
  const [modalDetails, setModalDetails] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');
  const { data: responseData, error, loading } = useAccounts();
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

  const [accountsBypage, setAccountsByPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalAccounts = data?.length;

  useEffect(() => {
    if (responseData) {
      setData(responseData);
      initialData.current = responseData;
    }
  }, [responseData]);

  const lastIndex = currentPage * accountsBypage;
  const firstIndex = lastIndex - accountsBypage;

  const onHandleStatus = async (idEmpresa, message, index) => {
    await companyDecision(idEmpresa, message);
    data[index].estatus = message;
    setModalDetails(false);
    setMessageStatus('');
  };

  const [filtroSelected, setFiltroSelected] = useState('Todo');

  const handleFiltro = (e) => {
    const valorSeleccionado = e.target.value;
    setFiltroSelected(valorSeleccionado);

    const filtered = initialData.current.filter((account) => {
      if (valorSeleccionado === 'Todo') {
        return account;
      } else if (valorSeleccionado === '1') {
        return account.estatus === 'Bloqueado';
      } else if (valorSeleccionado === '2') {
        return account.estatus === 'Activo';
      } else if (valorSeleccionado === '3') {
        return account.estatus !== 'Bloqueado' && account.estatus !== 'Activo';
      }
    });
    setData(filtered);
    setSearchValue('');
  };

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue === '') {
      setData(initialData.current);
    } else {
      const filtered = initialData.current.filter((account) => {
        let resultados;

        if (account.tipo_usuario === 'Cliente') {
          resultados = account.cliente.nombre_completo
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        } else {
          resultados = account.empresa.razon_social
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        }

        return resultados;
      });
      setData(filtered);
      setFiltroSelected('Todo');
    }
  }, [searchValue]);

  return (
    <>
      {data && (
        <div className="w-100 m-3">
          <span className="fw-bold">Solicitud de Empresas</span>

          <div className="d-flex justify-content-between my-3">
            <Form.Control
              type="search"
              placeholder="Buscar Por Nombre"
              className="me-2 w-50"
              aria-label="Search"
              name="search"
              onChange={onSearchChange}
              value={searchValue}
            />
            <div className="d-flex text-nowrap align-items-center">
              <span>Filtrar por: </span>
              <select
                className="form-select"
                aria-label="Default select example"
                value={filtroSelected}
                onChange={handleFiltro}
              >
                <option selected>Todo</option>
                <option value="1">Bloqueados</option>
                <option value="2">Activos</option>
                <option value="3">Otros</option>
              </select>
            </div>
          </div>

          <ListGroupStyle>
            {data
              .map((user, index) => {
                if (user.tipo_usuario === 'Cliente') {
                  return (
                    <div key={index}>
                      <ItemStyle key={user.id} className="border-bottom">
                        {viewportWidth > 800 && (
                          <Image
                            src={user.url_foto}
                            style={{ height: 65, width: 65 }}
                          />
                        )}
                        <span className="col-3">
                          {user.cliente.nombre_completo}
                        </span>
                        <span className="col-2">
                          No. Doc: {user.cliente.numero_documento}
                        </span>
                        <span className="col-2 fw-bold fs-5 ">
                          {user.tipo_usuario}
                        </span>
                        <div className="col-1">
                          <AccountStatusStyle
                            drop="up"
                            variant=""
                            title={
                              <span
                                style={{ color: 'white', fontWeight: 'bold' }}
                              >
                                {viewportWidth > 800 ? user.estatus : ''}
                              </span>
                            }
                            className={`translate-middle ${user.estatus}`}
                            size="sm"
                          >
                            <Dropdown.Item
                              eventKey="1"
                              onClick={() => {
                                const message =
                                  user.estatus === 'Bloqueado'
                                    ? 'Activo'
                                    : 'Bloqueado';
                                setMessageStatus(message);
                                setModalDetails(true);
                                onHandleStatus(user.id, message, index);
                              }}
                            >
                              {user.estatus === 'Bloqueado'
                                ? 'Activar'
                                : 'Bloquear'}
                            </Dropdown.Item>
                          </AccountStatusStyle>
                        </div>
                      </ItemStyle>
                    </div>
                  );
                } else
                  return (
                    <div key={index}>
                      <ItemStyle key={user.id} className="border-bottom">
                        {viewportWidth > 800 && (
                          <Image
                            src={user.url_foto}
                            style={{ height: 65, width: 65 }}
                          />
                        )}
                        <span className="col-3">
                          {user.empresa.razon_social}
                        </span>
                        <span className="col-2">
                          NIT: {user.empresa.numero_documento_empresa}
                        </span>
                        <span className="col-2 fw-bold fs-5 ">
                          {user.tipo_usuario}
                        </span>
                        <div className="col-1">
                          <AccountStatusStyle
                            drop="up"
                            variant=""
                            title={
                              <span
                                style={{ color: 'white', fontWeight: 'bold' }}
                              >
                                {viewportWidth > 800 ? user.estatus : ''}
                              </span>
                            }
                            className={`translate-middle ${user.estatus}`}
                            size="sm"
                          >
                            <Dropdown.Item
                              eventKey="1"
                              onClick={() => {
                                const message =
                                  user.estatus === 'Bloqueado'
                                    ? 'Activo'
                                    : 'Bloqueado';
                                setMessageStatus(message);
                                setModalDetails(true);
                                onHandleStatus(user.id, message, index);
                              }}
                            >
                              {user.estatus === 'Bloqueado'
                                ? 'Activar'
                                : 'Bloquear'}
                            </Dropdown.Item>
                          </AccountStatusStyle>
                        </div>
                      </ItemStyle>
                    </div>
                  );
              })
              .slice(firstIndex, lastIndex)}
          </ListGroupStyle>

          <PaginationProfiles
            byPage={accountsBypage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            total={totalAccounts}
          />
        </div>
      )}
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
    </>
  );
};
