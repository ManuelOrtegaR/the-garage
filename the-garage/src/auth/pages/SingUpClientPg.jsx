import ClientSingUp from "../components/ClientSingUp";

import { MainConteiner, TitlePg } from "../components/StyledsComponents";

export function SingUpClientPg() {
  return (
    <MainConteiner className="img-fluid">
      <div className="client_form  d-flex w-50 ">
        <div className="login__contenedor p-10 w-100">
          <TitlePg className="align-items-center  p-3 mt-5">
            Registro cliente
          </TitlePg>
          <ClientSingUp />
        </div>
      </div>
    </MainConteiner>
  );
}
