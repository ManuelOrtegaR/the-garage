import { user } from '../../../../../ui/components';

export const CompanyInformation = () => {
  return (
    <div className="z-2 position-relative z-2 m-5 border">
      <div className="bg-body z-3 py-1 px-2 position-absolute translate-middle mt-0 start-50 text-center border rounded-pill">
        <h5>Informacion de la compañia</h5>
      </div>

      <div className="py-2 px-2">
        <strong>Compañia: </strong>
        {user[1].name}
        <i className="bi bi-pencil-fill ms-3"></i>
      </div>
      <div className="py-2 px-2">
        <strong>Correo: </strong>
        {user[1].email}
      </div>
      <div className="py-2 px-2">
        <strong>Numero: </strong> {user[1].phone}
        <i className="bi bi-pencil-fill ms-3"></i>
      </div>
      <div className="py-2 px-2">
        <strong>Direccion: </strong>
        {user[1].address}
        <i className="bi bi-pencil-fill ms-3"></i>
      </div>
    </div>
  );
};
