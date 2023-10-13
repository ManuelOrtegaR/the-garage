import Nav from 'react-bootstrap/Nav';
import { FormSelectStyled, IconContainer } from './ComponentsStyles';
import locationIconW from '../../../assets/images/nav/locationIconW.svg';

const locationItems = [
  { id: 1, department: 'Amazonas', city: 'Leticia' },
  { id: 2, department: 'Antioquia', city: 'Medellín' },
  { id: 3, department: 'Arauca', city: 'Arauca' },
  { id: 4, department: 'Atlántico', city: 'Barranquilla' },
  { id: 5, department: 'Bogotá', city: 'Bogotá' },
  { id: 6, department: 'Bolívar', city: 'Cartagena' },
  { id: 7, department: 'Boyacá', city: 'Tunja' },
  { id: 8, department: 'Caldas', city: 'Manizales' },
  { id: 9, department: 'Caquetá', city: 'Florencia' },
  { id: 10, department: 'Casanare', city: 'Yopal' },
  { id: 11, department: 'Cauca', city: 'Popayán' },
  { id: 12, department: 'Cesar', city: 'Valledupar' },
  { id: 13, department: 'Chocó', city: 'Quibdó' },
  { id: 14, department: 'Córdoba', city: 'Montería' },
  { id: 15, department: 'Cundinamarca', city: 'Bogota' },
  { id: 16, department: 'Guainía', city: 'Inírida' },
  { id: 17, department: 'Guaviare', city: 'Guaviare' },
  { id: 18, department: 'Huila', city: 'Neiva' },
  { id: 19, department: 'La Guajira', city: 'Riohacha' },
  { id: 20, department: 'Magdalena', city: 'Santa Marta' },
  { id: 21, department: 'Meta', city: 'Villavicencio' },
  { id: 22, department: 'Nariño', city: 'Pasto' },
  { id: 23, department: 'Norte de Santander', city: 'Cúcuta' },
  { id: 24, department: 'Putumayo', city: 'Mocoa' },
  { id: 25, department: 'Quindío', city: 'Armenia' },
  { id: 26, department: 'Risaralda', city: 'Pereira' },
  { id: 27, department: 'San Andrés', city: 'San Andrés' },
  { id: 28, department: 'Santander', city: 'Bucaramanga' },
  { id: 29, department: 'Sucre', city: 'Sincelejo' },
  { id: 30, department: 'Tolima', city: 'Ibagué' },
  { id: 31, department: 'Valle del Cauca', city: 'Cali' },
  { id: 32, department: 'Vaupés', city: 'Mitú' },
  { id: 33, department: 'Vichada', city: 'Puerto Carreño' },
];

export const NavLocation = () => {
  return (
    <Nav className="me-auto align-items-center">
      <IconContainer maxWidth="15px" src={locationIconW} />
      <FormSelectStyled>
        <option value="0">Selecciona tu ubicación</option>
        {locationItems.map(({ department, city, id }) => {
          return (
            <option key={city} value={id}>
              {department}, {city}
            </option>
          );
        })}
      </FormSelectStyled>
    </Nav>
  );
};
