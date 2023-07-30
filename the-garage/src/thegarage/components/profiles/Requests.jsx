import {
  ItemStyle,
  ListGroupStyle,
  ShowOrder,
  PaginationStyle,
  PagEllipsisStyle,
  PagItemStyle,
  PagNextStyle,
  PagPrevStyle,
  StatusRequestStyle,
} from './StylesComponentsProfiles';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

export const Requests = () => {
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
        <ItemStyle>
          <Image src="https://placehold.co/60x60" />
          <span>Nombre de la empresa 1</span>
          <span>30/jun/2023</span>
          <div className="col-2">
            <StatusRequestStyle className="pending">
              Pendiente
            </StatusRequestStyle>
          </div>
          <ShowOrder>
            <i
              className="bi bi-eye-fill"
              style={{ width: '20px', height: '20px' }}
            />
          </ShowOrder>
        </ItemStyle>
        <ItemStyle>
          <Image src="https://placehold.co/60x60" />
          <span>Nombre de la empresa 2</span>
          <span>02/jul/2023</span>
          <div className="col-2">
            <StatusRequestStyle className="approved">
              Aprovado
            </StatusRequestStyle>
          </div>
          <ShowOrder>
            <i
              className="bi bi-eye-fill"
              style={{ width: '20px', height: '20px' }}
            />
          </ShowOrder>
        </ItemStyle>
        <ItemStyle>
          <Image src="https://placehold.co/60x60" />
          <span>Nombre de la empresa 3</span>
          <span>23/jul/2023</span>
          <div className="col-2">
            <StatusRequestStyle className="dismissed">
              Rechazado
            </StatusRequestStyle>
          </div>
          <ShowOrder>
            <i
              className="bi bi-eye-fill"
              style={{ width: '20px', height: '20px' }}
            />
          </ShowOrder>
        </ItemStyle>
        <ItemStyle>
          <Image src="https://placehold.co/60x60" />
          <span>Nombre de la empresa 4</span>
          <span>23/jul/2023</span>
          <div className="col-2">
            <StatusRequestStyle className="approved">
              Aprovado
            </StatusRequestStyle>
          </div>
          <ShowOrder>
            <i
              className="bi bi-eye-fill"
              style={{ width: '20px', height: '20px' }}
            />
          </ShowOrder>
        </ItemStyle>
      </ListGroupStyle>

      <PaginationStyle className="justify-content-center">
        <PagPrevStyle>
          <i className="bi bi-arrow-left p-1"></i>
          Prev
        </PagPrevStyle>
        <PagItemStyle>{1}</PagItemStyle>
        <PagItemStyle>{2}</PagItemStyle>
        <PagItemStyle active>{3}</PagItemStyle>
        <PagItemStyle>{4}</PagItemStyle>
        <PagItemStyle>{5}</PagItemStyle>
        <PagItemStyle>{6}</PagItemStyle>
        <PagItemStyle>{7}</PagItemStyle>
        <PagEllipsisStyle />
        <PagItemStyle>{20}</PagItemStyle>
        <PagNextStyle>
          Next
          <i className="bi bi-arrow-right p-1"></i>
        </PagNextStyle>
      </PaginationStyle>
    </div>
  );
};
