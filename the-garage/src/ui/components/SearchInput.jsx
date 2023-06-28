import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import buscar from '../../../assets/images/home/buscar.svg';

export const SearchInput = () => {
  return (
    <InputGroup>
      <Form.Control
        type="text"
        placeholder="Buscar productos, marcas, servicios y mas..."
        aria-label="input-search"
      />
      <InputGroup.Text>
        <img src={buscar} alt="search-icon" height="20"></img>
      </InputGroup.Text>
    </InputGroup>
  );
};
