import { Route, Routes } from "react-router-dom";
import { Login } from "../auth";
import { TheGarageRoutes } from "../thegarage";
import { SingUpPg } from "../auth/pages/SingUpPg";

//import { SingUpPg } from "../auth/pages/SingUpPg";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<TheGarageRoutes />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="/Singup" element={<SingUpPg />}></Route>
      </Routes>
    </>
  );
};
