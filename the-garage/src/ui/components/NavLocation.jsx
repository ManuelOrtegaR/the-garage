import { Nav, NavDropdown } from 'react-bootstrap';
import { NavDropDownStyled } from './ComponentsStyled';

const locationItems = [
  { department: 'Amazonas', city: 'Leticia' },
  { department: 'Antioquia', city: 'Medellín' },
  { department: 'Arauca', city: 'Arauca' },
  { department: 'Atlántico', city: 'Barranquilla' },
  { department: 'Bogotá', city: 'Bogotá' },
  { department: 'Bolívar', city: 'Cartagena de Indias' },
  { department: 'Boyacá', city: 'Tunja' },
  { department: 'Caldas', city: 'Manizales' },
  { department: 'Caquetá', city: 'Florencia' },
  { department: 'Casanare', city: 'Yopal' },
  { department: 'Cauca', city: 'Popayán' },
  { department: 'Cesar', city: 'Valledupar' },
  { department: 'Chocó', city: 'Quibdó' },
  { department: 'Córdoba', city: 'Montería' },
  { department: 'Cundinamarca', city: 'Bogotá' },
  { department: 'Guainía', city: 'Inírida' },
  { department: 'Guaviare', city: 'San José del Guaviare' },
  { department: 'Huila', city: 'Neiva' },
  { department: 'La Guajira', city: 'Riohacha' },
  { department: 'Magdalena', city: 'Santa Marta' },
  { department: 'Meta', city: 'Villavicencio' },
  { department: 'Nariño', city: 'Pasto' },
  { department: 'Norte de Santander', city: 'San José de Cúcuta' },
  { department: 'Putumayo', city: 'Mocoa' },
  { department: 'Quindío', city: 'Armenia' },
  { department: 'Risaralda', city: 'Pereira' },
  { department: 'San Andrés y Providencia', city: 'San Andrés' },
  { department: 'Santander', city: 'Bucaramanga' },
  { department: 'Sucre', city: 'Sincelejo' },
  { department: 'Tolima', city: 'Ibagué' },
  { department: 'Valle del Cauca', city: 'Cali' },
  { department: 'Vaupés', city: 'Mitú' },
  { department: 'Vichada', city: 'Puerto Carreño' },
];

export const NavLocation = () => {
  return (
    <Nav className="me-auto">
      <NavDropDownStyled title="Ciudad, Departamento">
        {locationItems.map(({ department, city, index }) => {
          return (
            <NavDropdown.Item key={location} href={`#action/3.${index + 1}`}>
              {department}, {city}
            </NavDropdown.Item>
          );
        })}
      </NavDropDownStyled>
    </Nav>
  );
};
