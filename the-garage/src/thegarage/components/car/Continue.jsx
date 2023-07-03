import { Link } from "react-router-dom";

export const Continue = () => {
  return (
    <h5 className="mb-3">
      <Link to="/home">
        <i className="bi bi-arrow-left"> </i>
        Continuar Navegando
      </Link>
    </h5>
  );
};
