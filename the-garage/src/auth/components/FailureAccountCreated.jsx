import { BtnSubmitStyled } from '../../components';
import { TextPg, TitlePg } from './StyledsComponents';
import { useNavigate } from 'react-router-dom';

export const FailureAccountCreated = (error) => {
  const message = error.message || 'Error de conexión con el servidor';

  const navigate = useNavigate();

  return (
    <div className="confirmacion d-flex row w-50 bg-white">
      <div className="confirmacion__contenedor">
        <TitlePg>Estado de la creación de usuario</TitlePg>
        <div className="m-5 ">
          <TextPg>
            No se ha podido crear el usuario. Por favor, inténtelo de nuevo o
            contacte con el administrador.
          </TextPg>
          {message && <TextPg color="red">Motivo: {message}</TextPg>}
        </div>
        <div className="m-5">
          <BtnSubmitStyled onClick={() => navigate('/Singupclient')}>
            Volver al registro de cliente
          </BtnSubmitStyled>
        </div>
      </div>
    </div>
  );
};
