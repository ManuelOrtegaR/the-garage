import { useState } from 'react';
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
  const { data, error, loading } = useAccounts();

  const [accountsBypage, setAccountsByPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalAccounts = data?.length;

  const lastIndex = currentPage * accountsBypage;
  const firstIndex = lastIndex - accountsBypage;

  const onHandleStatus = async (idEmpresa, message, index) => {
    await companyDecision(idEmpresa, message);
    data[index].estatus = message;
    setModalDetails(false);
    setMessageStatus('');
  };

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
            />
            <div className="d-flex text-nowrap align-items-center">
              <span>Ordenar por: </span>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Todo</option>
                <option value="1">Estado</option>
                <option value="2">Fecha</option>
                <option value="3">Tienda</option>
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
                        <Image
                          src={user.url_foto}
                          style={{ height: 65, width: 65 }}
                        />
                        <span className="col-2">
                          {user.cliente.nombre_completo}
                        </span>
                        <span className="col-1">
                          No. Doc: {user.cliente.numero_documento}
                        </span>
                        <span className="col-2 fw-bold fs-5 ">
                          {user.tipo_usuario}
                        </span>
                        <div className="col-2">
                          <AccountStatusStyle
                            drop="up"
                            variant=""
                            title={
                              <span
                                style={{ color: 'white', fontWeight: 'bold' }}
                              >
                                {user.estatus}
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
                        <Image
                          src={user.url_foto}
                          style={{ height: 65, width: 65 }}
                        />
                        <span className="col-2">
                          {user.empresa.razon_social}
                        </span>
                        <span className="col-1">
                          NIT: {user.empresa.numero_documento_empresa}
                        </span>
                        <span className="col-2 fw-bold fs-5 ">
                          {user.tipo_usuario}
                        </span>
                        <div className="col-2">
                          <AccountStatusStyle
                            drop="up"
                            variant=""
                            title={
                              <span
                                style={{ color: 'white', fontWeight: 'bold' }}
                              >
                                {user.estatus}
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
