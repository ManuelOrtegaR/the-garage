import { Link } from 'react-router-dom';
import ClientSingUp from '../components/ClientSingUp';

import { MainConteiner, TitlePg } from '../components/StyledsComponents';

export function SingUpClientPg() {
  return (
    <MainConteiner height="none">
      <div className="login__contenedor p-5" style={{ minWidth: '700px' }}>
        <Link to="/login" className="text-decoration-none">
          <i className="bi bi-arrow-left"> </i>
          Volver
        </Link>

        <TitlePg className="mb-5">Registro cliente</TitlePg>
        <ClientSingUp />
      </div>
    </MainConteiner>
  );
}
