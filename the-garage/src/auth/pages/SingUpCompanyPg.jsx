import { Link } from 'react-router-dom';

import CompanySingUp from '../components/CompanySingUp';
import { MainConteiner, TitlePg } from '../components/StyledsComponents';

export function SingUpCompanyPg() {
  return (
    <MainConteiner height="none">
      <div className="login__contenedor p-5" style={{ minWidth: '700px' }}>
        <Link to="/login" className="text-decoration-none">
          <i className="bi bi-arrow-left"> </i>
          Volver
        </Link>
        <TitlePg className="mb-5">Registro Empresa</TitlePg>
        <CompanySingUp />
      </div>
    </MainConteiner>
  );
}
