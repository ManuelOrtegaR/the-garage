import CompanySingUp from "../components/CompanySingUp";

import { MainConteiner, TitlePg } from "../components/StyledsComponents";

export function SingUpCompanyPg() {
  return (
    <MainConteiner>
      <div className=" d-flex  w-50">
        <div className="login__contenedor p-4 m-0 w-100">
          <TitlePg className="align-items-center">Registro Empresa</TitlePg>

          <CompanySingUp />
        </div>
      </div>
    </MainConteiner>
  );
}
