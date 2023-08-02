import Image from 'react-bootstrap/Image';
import { NavLinkProfile, NavLinkEdit } from './StylesComponentsProfiles';

export const users = [
  {
    profile: '../../../../assets/images/home/Alejandro.jpg',
    name: 'Alejandro',
    lastName: 'Gomez Trejos',
    user: 'Alejo.GomT',
    documentType: 'Cedula de ciudadania',
    document: '1234567890',
    phone: '(+57) 321-2000-824',
    address: 'Calle 40 #52-66 BR EL PERDIDO',
    email: 'test@thegarage.com',
    type: 'client',
  },
  // {
  //   profile: '../../../../assets/images/home/empresas/empresa4.jpg',
  //   name: 'Globe Symbol',
  //   user: 'Globe.Sym2020',
  //   documentType: 'Nit',
  //   document: '1234567890-8',
  //   phone: '(+57) 321-2000-824',
  //   address: 'Calle 40 #52-66 BR EL PERDIDO',
  //   email: 'test@thegarage.com',
  //   type: 'company',
  // },
  // {
  //   name: 'Admin',
  //   email: 'test@thegarage.com',
  //   type: 'admin',
  // },
];

export const TestProfiles = () => {
  return (
    <div className="d-flex align-items-center justify-content-around">
      {users.map(
        ({
          profile,
          name,
          user,
          lastName,
          documentType,
          document,
          phone,
          address,
          email,
          type,
        }) => {
          {
            if (type !== 'admin') {
              return (
                <>
                  <div className="d-flex flex-column text-center ">
                    <div className="position-relative mb-4">
                      <Image
                        src={profile}
                        style={{ height: 100, width: 100 }}
                        roundedCircle
                      />
                      <NavLinkProfile className="position-absolute top-100 start-50 translate-middle">
                        <Image
                          src="../../../../assets/images/home/tecnologiesIcons/editImage.svg"
                          style={{ height: 25, width: 25 }}
                        />
                      </NavLinkProfile>
                    </div>
                    <span className="lh-1">{name}</span>
                    {type !== 'company' ? <span>{lastName}</span> : null}
                  </div>
                  <div>
                    <div className="d-flex py-1">
                      <span className="w-50">Usuario:</span>
                      <span className="w-50">{user}</span>
                      <NavLinkEdit className={'ms-2'}>
                        <i className="bi bi-pencil-fill px-2"></i>
                      </NavLinkEdit>
                    </div>
                    <div className="d-flex py-1">
                      <span className="w-50">Tipo de documento:</span>
                      <span className="w-50">{documentType}</span>
                      <NavLinkEdit className={'ms-2'}>
                        <i className="bi bi-pencil-fill px-2"></i>
                      </NavLinkEdit>
                    </div>
                    <div className="d-flex py-1">
                      <span className="w-50">No. Documento:</span>
                      <span className="w-50">{document}</span>
                      <NavLinkEdit className={'ms-2'}>
                        <i className="bi bi-pencil-fill px-2"></i>
                      </NavLinkEdit>
                    </div>
                  </div>

                  <div>
                    <div className="d-flex py-1">
                      <span className="w-25">Telefono:</span>
                      <span className="w-75">{phone}</span>
                      <NavLinkEdit>
                        <i className="bi bi-pencil-fill px-2"></i>
                      </NavLinkEdit>
                    </div>
                    <div className="d-flex py-1">
                      <span className="w-25">Direccion:</span>
                      <span className="w-75">{address}</span>
                      <NavLinkEdit>
                        <i className="bi bi-pencil-fill px-2"></i>
                      </NavLinkEdit>
                    </div>
                    <div className="d-flex py-1">
                      <span className="w-25">Correo:</span>
                      <span className="w-75">{email}</span>{' '}
                      <NavLinkEdit>
                        <i className="bi bi-pencil-fill px-2"></i>
                      </NavLinkEdit>
                    </div>
                  </div>
                </>
              );
            } else {
              return (
                <>
                  <span className="py-4">Usuario: {name}</span>
                  <span className="py-4">Correo: {email}</span>
                </>
              );
            }
          }
        },
      )}
    </div>
  );
};
