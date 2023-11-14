import { useNavigate } from 'react-router-dom';

import { BtnSubmitStyled } from '../../components';
import { TextPg, TitlePg } from './StyledsComponents';

export const FailureAccountCreated = (error) => {
  const message = error.message || 'Error de conexión con el servidor';

  const navigate = useNavigate();

  return (
    <div
      className="confirmacion__contenedor bg-white p-5"
      style={{ minWidth: '700px', maxWidth: '700px' }}
    >
      <TitlePg>Estado de la creación de usuario</TitlePg>
      <div className="m-5 ">
        <TextPg>
          No se ha podido crear el usuario. Por favor, inténtelo de nuevo o
          contacte con el administrador.
        </TextPg>
        {message && <TextPg color="red">Motivo: {message}</TextPg>}
      </div>
      <div className="m-5">
        <BtnSubmitStyled onClick={() => navigate('/login')}>
          Volver al inicio de sesión
        </BtnSubmitStyled>
      </div>
    </div>
  );
};
