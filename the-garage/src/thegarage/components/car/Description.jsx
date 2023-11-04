/* eslint-disable react/prop-types */
import { DescriptionStyled } from './StylesComponentsCar';

export const Description = ({ totalItems, nombre_empresa }) => {
  return (
    <DescriptionStyled>
      <div>
        <p className="mb-1">{`Carrito de Compras de ${nombre_empresa}`}</p>
        <p className="mb-0">Tienes {totalItems} Elemento(s)</p>
      </div>
    </DescriptionStyled>
  );
};
