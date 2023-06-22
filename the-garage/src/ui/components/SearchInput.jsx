import { Form, InputGroup } from 'react-bootstrap';
import buscar from '../../../assets/images/home/buscar.svg';

export const SearchInput = () => {
  return (
    <InputGroup>
      <Form.Control
        type="text"
        placeholder="Buscar productos, marcas, servicios y mas..."
        aria-label="input search"
        aria-describedby="btnGroupAddon"
      />
      <InputGroup.Text id="btnGroupAddon">
        <img
          src={buscar}
          alt="search-icon"
          height="20"
          className="d-inline-block align-top"
        ></img>
      </InputGroup.Text>
    </InputGroup>
  );
};
