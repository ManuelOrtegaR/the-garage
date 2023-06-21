import { User } from './ClientProfile';

export const PersonalInformation = () => {
  return (
    <div className="z-2 position-relative z-2 m-5 border">
      <div className="bg-body z-3 py-1 px-2 position-absolute translate-middle mt-0 start-50 text-center border rounded-pill">
        <h5>Personal Information</h5>
      </div>

      <div className="py-2 px-2">
        <strong>{User === 'Client' ? 'Full Name: ' : 'Company: '}</strong>
        Alejandro Gomez Trejos
        <i className="bi bi-pencil-fill ms-3"></i>
      </div>
      <div className="py-2 px-2">
        <strong>E-mail: </strong>alejogomezt2000@gmail.com
      </div>
      <div className="py-2 px-2">
        <strong>Phone: </strong> {'(+57)'} 321-2000-824
        <i className="bi bi-pencil-fill ms-3"></i>
      </div>
      <div className="py-2 px-2">
        <strong>Adress: </strong>Calle 40 #52-66 BR EL PERDIDO
        <i className="bi bi-pencil-fill ms-3"></i>
      </div>
    </div>
  );
};
