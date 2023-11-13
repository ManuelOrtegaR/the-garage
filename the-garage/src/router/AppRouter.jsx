import { Navigate, Route, Routes } from 'react-router-dom';

import { TheGarageRoutes } from '../thegarage';
import { ConfirmationPage, Login } from '../auth';
import { SingUpClientPg } from '../auth/pages/SingUpClientPg';
import { SingUpCompanyPg } from '../auth/pages/SingUpCompanyPg';
import { RecoveryPasswordPg } from '../auth/pages/RecoveryPasswordPg';
import { ActivationPage } from '../auth/pages/ActivationPage';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<TheGarageRoutes />}></Route>
        <Route path="login" element={<Login />}></Route>

        <Route path="/Singupclient" element={<SingUpClientPg />}></Route>
        <Route path="/Singupcompany" element={<SingUpCompanyPg />}></Route>
        <Route
          path="/Recoverypassword/:token"
          element={<RecoveryPasswordPg />}
        ></Route>
        <Route
          path="/Recoverypassword"
          element={<RecoveryPasswordPg />}
        ></Route>
        <Route path="/activacion/:token" element={<ActivationPage />}></Route>
        <Route path="/activacion/" element={<Navigate to={'/login'} />}></Route>
        <Route path="/confirmacion" element={<ConfirmationPage />}></Route>
      </Routes>
    </>
  );
};
