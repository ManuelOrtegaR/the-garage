import { Route, Routes } from "react-router-dom";
import { Login } from "../auth";
import { TheGarageRoutes } from "../thegarage";

import { SingUpClientPg } from "../auth/pages/SingUpClientPg";
import { SingUpCompanyPg } from "../auth/pages/SingUpCompanyPg";
import { RecoveryPasswordPg } from "../auth/pages/RecoveryPasswordPg";

export const AppRouter = () => {
  //<Route path="/Singupclient" element={<SingUpClientPg />}></Route>
  return (
    <>
      <Routes>
        <Route path="/*" element={<TheGarageRoutes />}></Route>
        <Route path="login" element={<Login />}></Route>

        <Route path="/Singupclient" element={<SingUpClientPg />}></Route>
        <Route path="/Singupcompany" element={<SingUpCompanyPg />}></Route>
        <Route
          path="/Recoverypassword"
          element={<RecoveryPasswordPg />}
        ></Route>
      </Routes>
    </>
  );
};
