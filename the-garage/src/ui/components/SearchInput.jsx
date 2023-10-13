import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import buscar from "../../../assets/images/home/buscar.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SearchInput = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      navigate(`/productos/${searchValue}`);
      setSearchValue("");
      window.location.reload();
    }
  };
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <InputGroup>
      <Form.Control
        type="text"
        placeholder="Buscar productos, marcas, servicios y mas..."
        aria-label="input-search"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <InputGroup.Text>
        <img src={buscar} alt="search-icon" height="20"></img>
      </InputGroup.Text>
    </InputGroup>
  );
};
