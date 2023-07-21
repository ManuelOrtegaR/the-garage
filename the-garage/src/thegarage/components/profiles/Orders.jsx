import Image from 'react-bootstrap/Image';
import {
  ItemStyle,
  ListGroupStyle,
  PagEllipsisStyle,
  PagItemStyle,
  PagNextStyle,
  PagPrevStyle,
  PaginationStyle,
  ShowOrder,
  StatusStyle,
} from './StylesComponentsProfiles';

export const Orders = () => {
  return (
    <>
      <div className="m-auto w-100 p-4 ">
        <div className="d-flex justify-content-between mb-4">
          <span className="fs-6 fw-bold">Ordenes</span>
          <div className="d-flex w-25  align-items-center">
            <span className="w-50">Filtrar por: </span>
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
            <Image
              src="https://placehold.co/600x400"
              style={{ height: 65, width: 65 }}
            />
            <span>Nombre de la empresa 1</span>
            <span>Articulos: 5</span>
            <span className="fw-bold fs-5 ">$250.000</span>
            <div className="col-2">
              <StatusStyle className="delivered">Entregado</StatusStyle>
            </div>
            <ShowOrder>
              <i
                className="bi bi-eye-fill"
                style={{ width: '20px', height: '20px' }}
              />
            </ShowOrder>
          </ItemStyle>
          <ItemStyle>
            <Image
              src="https://placehold.co/600x400"
              style={{ height: 65, width: 65 }}
            />
            <span>Nombre de la empresa 2</span>
            <span>Articulos: 5</span>
            <span className="fw-bold fs-5 ">$250.000</span>
            <div className="col-2">
              <StatusStyle className="processing">Procesando</StatusStyle>
            </div>
            <ShowOrder>
              <i
                className="bi bi-eye-fill"
                style={{ width: '20px', height: '20px' }}
              />
            </ShowOrder>
          </ItemStyle>
          <ItemStyle>
            <Image
              src="https://placehold.co/600x400"
              style={{ height: 65, width: 65 }}
            />
            <span>Nombre de la empresa 3</span>
            <span>Articulos: 5</span>
            <span className="fw-bold fs-5 ">$250.000</span>
            <div className="col-2">
              <StatusStyle className="onTheWay">En Camino</StatusStyle>
            </div>
            <ShowOrder>
              <i
                className="bi bi-eye-fill"
                style={{ width: '20px', height: '20px' }}
              />
            </ShowOrder>
          </ItemStyle>
          <ItemStyle>
            <Image
              src="https://placehold.co/600x400"
              style={{ height: 65, width: 65 }}
            />
            <span>Nombre de la empresa 4</span>
            <span>Articulos: 5</span>
            <span className="fw-bold fs-5 ">$250.000</span>
            <div className="col-2">
              <StatusStyle className="cancelled">Cancelado</StatusStyle>
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
    </>
  );
};
