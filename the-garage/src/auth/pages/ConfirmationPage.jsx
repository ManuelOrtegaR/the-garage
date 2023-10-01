import { useLocation } from 'react-router-dom';
import { FailureAccountCreated } from '../components/FailureAccountCreated';
import { MainConteiner } from '../components/StyledsComponents';
import { SuccessAccountCreated } from '../components/SuccessAccountCreated';

export const ConfirmationPage = () => {
  const { state } = useLocation();
  const { status, message = 'Error de conexión con el servidor' } = state;

  return (
    <MainConteiner className="img-fluid">
      {!status ? (
        <SuccessAccountCreated />
      ) : (
        <FailureAccountCreated message={message} />
      )}
    </MainConteiner>
  );
};
