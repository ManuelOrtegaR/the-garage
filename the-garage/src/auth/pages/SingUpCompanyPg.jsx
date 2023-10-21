import { Link } from 'react-router-dom';
import CompanySingUp from '../components/CompanySingUp';

import { MainConteiner, TitlePg } from '../components/StyledsComponents';

export function SingUpCompanyPg() {
  return (
    <MainConteiner>
      <div className=" d-flex  w-50">
        <div className="login__contenedor p-4 m-0 w-100">
          <Link to="/login" className="m-5">
            <i className="bi bi-arrow-left"> </i>
            Volver
          </Link>
          <TitlePg className="align-items-center">Registro Empresa</TitlePg>
          <CompanySingUp />
        </div>
      </div>
    </MainConteiner>
  );
}
