import { Form } from 'react-bootstrap';
import { PaginationProfiles } from './PaginationProfiles';
import {
  ItemStyle,
  ListGroupStyle,
  ShowOrder,
} from './StylesComponentsProfiles';
import Image from 'react-bootstrap/Image';
import { BtnSubmitStyled } from '../../../components/StyledButtons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { mockDataTestServices } from '../../dataTest/dataMock';

export const Services = () => {
  //React-router: Obtenemos el id de la url.
  const viewService = useNavigate();
  const addService = useNavigate();

  const [data, setData] = useState(mockDataTestServices);
  const [services, setService] = useState([...data]);
  const [serviceBypage, setServicesByPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalService = services.length;

  const lastIndex = currentPage * serviceBypage;
  const firstIndex = lastIndex - serviceBypage;

  return (
    <div className="w-100">
      <div className="d-flex justify-content-between align-items-center my-4 mx-3">
        <span className="fw-bold">Mis Servicios</span>
        <BtnSubmitStyled onClick={() => addService('add')}>
          Agregar Nuevo Servicio
        </BtnSubmitStyled>
      </div>
      <div className="d-flex justify-content-between m-3">
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
      <ListGroupStyle className="m-3 text-align-center">
        {services
          .map((service) => (
            <>
              <ItemStyle>
                <Image
                  src={service.image}
                  style={{ width: '65px', height: '65px' }}
                ></Image>
                <span className="col-3">{service.title}</span>
                <span>Stock: {service.stock}</span>
                <span className="fw-bold col-2">{service.price}</span>
                <ShowOrder onClick={() => viewService(`${service.id}`)}>
                  <i className="bi bi-eye-fill" />
                </ShowOrder>
                <ShowOrder>
                  <i className="bi bi-trash-fill" />
                </ShowOrder>
              </ItemStyle>
            </>
          ))
          .slice(firstIndex, lastIndex)}
      </ListGroupStyle>
      <PaginationProfiles
        byPage={serviceBypage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={totalService}
      />
    </div>
  );
};
