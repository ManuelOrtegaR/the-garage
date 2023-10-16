import { Link } from 'react-router-dom';
import ClientSingUp from '../components/ClientSingUp';

import { MainConteiner, TitlePg } from '../components/StyledsComponents';

export function SingUpClientPg() {
  return (
    <MainConteiner className="img-fluid">
      <div className="client_form  d-flex w-50 ">
        <div className="login__contenedor p-10 w-100">
          <Link to="/login" className="m-5">
            <i className="bi bi-arrow-left"> </i>
            Volver
          </Link>

          <TitlePg className="align-items-center p-3 mt-2">
            Registro cliente
          </TitlePg>
          <ClientSingUp />
        </div>
      </div>
    </MainConteiner>
  );
}
