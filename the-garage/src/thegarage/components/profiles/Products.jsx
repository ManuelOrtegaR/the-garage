import { Form } from 'react-bootstrap';
import {
  ItemStyle,
  ListGroupStyle,
  ShowOrder,
  PaginationStyle,
  PagEllipsisStyle,
  PagItemStyle,
  PagNextStyle,
  PagPrevStyle,
} from './StylesComponentsProfiles';
import Image from 'react-bootstrap/Image';
import { BtnSubmitStyled } from '../../../components/StyledButtons';

export const Products = () => {
  return (
    <div className="w-100">
      <div className="d-flex justify-content-between align-items-center my-4 mx-3">
        <span className="fw-bold">Mis Productos</span>
        <BtnSubmitStyled>Agregar Nuevo Producto</BtnSubmitStyled>
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
      <ListGroupStyle className="m-3">
        <ItemStyle>
          <Image src="https://placehold.co/65x65"></Image>
          <span>Titulo del producto</span>
          <span>Stock: 12</span>
          <span className="fw-bold">$12.500</span>
          <ShowOrder>
            <i className="bi bi-eye-fill" />
          </ShowOrder>
          <ShowOrder>
            <i className="bi bi-trash-fill" />
          </ShowOrder>
        </ItemStyle>
        <ItemStyle>
          <Image src="https://placehold.co/65x65"></Image>
          <span>Titulo del producto</span>
          <span>Stock: 12</span>
          <span className="fw-bold">$12.500</span>
          <ShowOrder>
            <i className="bi bi-eye-fill" />
          </ShowOrder>
          <ShowOrder>
            <i className="bi bi-trash-fill" />
          </ShowOrder>
        </ItemStyle>
        <ItemStyle>
          <Image src="https://placehold.co/65x65"></Image>
          <span>Titulo del producto</span>
          <span>Stock: 12</span>
          <span className="fw-bold">$12.500</span>
          <ShowOrder>
            <i className="bi bi-eye-fill" />
          </ShowOrder>
          <ShowOrder>
            <i className="bi bi-trash-fill" />
          </ShowOrder>
        </ItemStyle>
        <ItemStyle>
          <Image src="https://placehold.co/65x65"></Image>
          <span>Titulo del producto</span>
          <span>Stock: 12</span>
          <span className="fw-bold">$12.500</span>
          <ShowOrder>
            <i className="bi bi-eye-fill" />
          </ShowOrder>
          <ShowOrder>
            <i className="bi bi-trash-fill" />
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
