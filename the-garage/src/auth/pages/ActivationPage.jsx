import { Link, useParams } from 'react-router-dom';
import {
  MainConteiner,
  TextPg,
  TitlePg,
} from '../components/StyledsComponents';
import { useEffect, useState } from 'react';
import { activateAccount } from '../../api/auth';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

export const ActivationPage = () => {
  const params = useParams();
  const { token } = params;
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function activate(userToken) {
    setLoading(true);
    setError('');

    try {
      const response = await activateAccount(userToken);
      console.log(response);
      if (response.message === 'Autenticacion correcta') {
        setSuccess(true);
      }
    } catch (e) {
      const message = e.message || 'Error de conexión con el servidor';
      setSuccess(false);
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (token) {
      activate(token);
    }
  }, [token]);

  return (
    <MainConteiner className="img-fluid">
      <div className="activation_form  d-flex row w-50 bg-white">
        <div className="activation__contenedor">
          <TitlePg className="align-items-center  p-3 mt-5">
            Activación de la cuenta
          </TitlePg>
          {error && <Alert variant="danger">{error}</Alert>}
          {loading ? (
            <Spinner />
          ) : success ? (
            <TextPg>
              Tu cuenta ha sido activada. Puedes ir a{' '}
              <Link to="/login">inicio de sesión</Link>
            </TextPg>
          ) : (
            <>
              <TextPg>El enlace no existe o ha expirado, intenta </TextPg>
              <Link to="/confirmacion" className="m-5">
                Enviar nuevamente el correo de activación
              </Link>
            </>
          )}
        </div>
      </div>
    </MainConteiner>
  );
};
