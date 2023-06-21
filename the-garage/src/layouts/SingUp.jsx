import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ClientSingUp from "./ClientSingUp";
import CompanySingUp from "./CompanySingUp";

function SingUp() {
  return (
    <div className="contenedor row justify-content-center align-items-center h-100 vw-100">
      <div className="singup col-5 ">
        <div className="singup__contenedor p-4 m-1 rounded-5 p-3 mb-2 bg-white text-dark">
          <h1>Registro </h1>
          <Tabs
            defaultActiveKey="cliente"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="cliente" title="Cliente">
              <ClientSingUp />
            </Tab>
            <Tab eventKey="empresa" title="Empresa">
              <CompanySingUp />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
