import { Link } from 'react-router-dom';
import PasswordRecovery from '../components/PasswordRecovery';

import { MainConteiner, TitlePg } from '../components/StyledsComponents';

export function RecoveryPasswordPg() {
  return (
    <MainConteiner>
      <div className="recovery  d-flex w-50  bg-white">
        <div className="recovery__contenedor p-10 w-100  m-0 ">
          <Link to="/login" className="m-5">
            <i className="bi bi-arrow-left"> </i>
            Volver
          </Link>
          <TitlePg className="align-items-center">Recuperar Contraseña</TitlePg>

          <div className="recovery__contenedor">
            <PasswordRecovery />
          </div>
        </div>
      </div>
    </MainConteiner>
  );
}
