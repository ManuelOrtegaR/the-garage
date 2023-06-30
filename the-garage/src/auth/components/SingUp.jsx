import { TitlePg, TabsStyled, TabStyled } from "./StyledsComponents";

//import Tabs from "react-bootstrap/Tabs";
import ClientSingUp from "./ClientSingUp";
import CompanySingUp_user from "./CompanySingUp_user";

function SingUp() {
  return (
    <div className="singup col-5 ">
      <div className="singup__contenedor p-4 m-1 rounded-5 p-3 mb-2 bg-white text-dark">
        <div className="login__logo d-flex justify-content-center">
          <img src="/../assets/logos/logo-icono.png" alt="logo" />
        </div>
        <TitlePg>Registro </TitlePg>
        <TabsStyled
          defaultActiveKey="cliente"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <TabStyled eventKey="cliente" title="Cliente">
            <ClientSingUp />
          </TabStyled>
          <TabStyled eventKey="empresa" title="Empresa">
            <CompanySingUp_user />
          </TabStyled>
        </TabsStyled>
      </div>
    </div>
  );
}

export default SingUp;
