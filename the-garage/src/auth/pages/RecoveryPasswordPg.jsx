import { Link } from 'react-router-dom';
import PasswordRecovery from '../components/PasswordRecovery';

import { MainConteiner, TitlePg } from '../components/StyledsComponents';

export function RecoveryPasswordPg() {
  return (
    <MainConteiner>
      <div
        className="recovery__contenedor p-5 bg-white"
        style={{ minWidth: '700px' }}
      >
        <Link to="/login" className="text-decoration-none">
          <i className="bi bi-arrow-left"> </i>
          Volver
        </Link>
        <TitlePg className="align-items-center">Recuperar Contraseña</TitlePg>

        <div className="recovery__contenedor">
          <PasswordRecovery />
        </div>
      </div>
    </MainConteiner>
  );
}
