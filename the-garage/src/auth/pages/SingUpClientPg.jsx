import ClientSingUp from "../components/ClientSingUp";

import { MainConteiner, TitlePg } from "../components/StyledsComponents";

export function SingUpClientPg() {
  return (
    <MainConteiner>
      <div className="login d-flex ">
        <div className="login__contenedor p-4 m-1 rounded-5">
          <div className="login__logo d-flex justify-content-center">
            <img src="/../assets/logos/logo-icono.png" alt="logo" />
            <TitlePg className="align-items-center">Registro cliente</TitlePg>
          </div>
          <div className="login__form row">
            <ClientSingUp />
          </div>
        </div>
        <div className="login__rep d-flex justify-content-center p-4 m-1 rounded-5 ">
          <img
            src="/../assets/images/auth/repuestos1.jpg"
            className="login__rep d-flex justify-content-center p-4 m-1 rounded-5 "
            alt="partes"
          />
        </div>
      </div>
    </MainConteiner>
  );
}
