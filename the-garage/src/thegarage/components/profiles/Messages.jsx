import Image from 'react-bootstrap/Image';
import {
  BtnStateStyle,
  ItemStyle,
  ListGroupStyle,
  PagEllipsisStyle,
  PagItemStyle,
  PagNextStyle,
  PagPrevStyle,
  PaginationStyle,
} from './StylesComponentsProfiles';

export const Messages = () => {
  return (
    <>
      <div className="m-auto w-100 p-4 ">
        <div className="d-flex justify-content-between mb-4">
          <span className="fs-6 fw-bold">Mensajes</span>
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
              src="../../../../assets/images/home/empresas/empresa1.jpg"
              style={{ height: 65, width: 65 }}
            />
            <span>Nombre de la empresa 1</span>
            <span>
              <strong>Titulo de prueba 1</strong>
            </span>
            <span className="text-truncate col-5">
              Este es el mensaje principal de prueba para verificar el estilo de
              los componentes
            </span>
            <BtnStateStyle variant="open">Abierto</BtnStateStyle>
          </ItemStyle>
          <ItemStyle className="disabled">
            <Image
              src="../../../../assets/images/home/empresas/empresa2.jpg"
              style={{ height: 65, width: 65 }}
            />
            <span>Nombre de la empresa 2</span>
            <span>
              <strong>Titulo de prueba 2</strong>
            </span>
            <span className="text-truncate col-5">
              Este es el mensaje principal de prueba para verificar el estilo de
              los componentes
            </span>
            <BtnStateStyle variant="close">Cerrado</BtnStateStyle>
          </ItemStyle>
          <ItemStyle>
            <Image
              src="../../../../assets/images/home/empresas/empresa3.jpg"
              style={{ height: 65, width: 65 }}
            />
            <span>Nombre de la empresa 3</span>
            <span>
              <strong>Titulo de prueba 3</strong>
            </span>
            <span className="text-truncate col-5">
              Este es el mensaje principal de prueba para verificar el estilo de
              los componentes
            </span>
            <BtnStateStyle variant="open">Abierto</BtnStateStyle>
          </ItemStyle>
          <ItemStyle className="disabled">
            <Image
              src="../../../../assets/images/home/empresas/empresa5.jpg"
              style={{ height: 65, width: 65 }}
            />
            <span>Nombre de la empresa 4</span>
            <span>
              <strong>Titulo de prueba 4</strong>
            </span>
            <span className="text-truncate col-5">
              Este es el mensaje principal de prueba para verificar el estilo de
              los componentes
            </span>
            <BtnStateStyle variant="close">Cerrado</BtnStateStyle>
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
