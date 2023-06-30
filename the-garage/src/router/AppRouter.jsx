import { Route, Routes } from "react-router-dom";
import { Login } from "../auth";
import { TheGarageRoutes } from "../thegarage";

import { SingUpClientPg } from "../auth/pages/SingUpClientPg";
import { SingUpCompanyPg } from "../auth/pages/SingUpCompanyPg";
//import { SingUpPg } from "../auth/pages/SingUpPg";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<TheGarageRoutes />}></Route>
        <Route path="login" element={<Login />}></Route>

        <Route path="/Singupclient" element={<SingUpClientPg />}></Route>
        <Route path="/Singupcompany" element={<SingUpCompanyPg />}></Route>
      </Routes>
    </>
  );
};
