import Image from 'react-bootstrap/Image';
import { AuthContext } from '../../../auth/context/AuthContext';
import { NavLinkProfile, NavLinkEdit } from './StylesComponentsProfiles';
import { useContext } from 'react';

export const TestProfiles = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="d-flex align-items-center justify-content-around">
      {user.userClass !== 'Administrador' ? (
        <>
          <div className="d-flex flex-column text-center ">
            <div className="position-relative mb-4">
              <Image
                src={user.profileData.url_foto}
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
            <span className="lh-1">{user.name}</span>
            {user.userClass !== 'Empresa' ? <span>{user.name}</span> : null}
          </div>
          <div>
            <div className="d-flex py-1">
              <span className="w-50">Usuario:</span>
              <span className="w-50">{user.name}</span>
              <NavLinkEdit className={'ms-2'}>
                <i className="bi bi-pencil-fill px-2"></i>
              </NavLinkEdit>
            </div>
            <div className="d-flex py-1">
              <span className="w-50">Tipo de documento:</span>
              <span className="w-50">{user.profileData.numero_documento}</span>
              <NavLinkEdit className={'ms-2'}>
                <i className="bi bi-pencil-fill px-2"></i>
              </NavLinkEdit>
            </div>
            <div className="d-flex py-1">
              <span className="w-50">No. Documento:</span>
              <span className="w-50">{user.profileData.numero_documento}</span>
              <NavLinkEdit className={'ms-2'}>
                <i className="bi bi-pencil-fill px-2"></i>
              </NavLinkEdit>
            </div>
          </div>

          <div>
            <div className="d-flex py-1">
              <span className="w-25">Telefono:</span>
              <span className="w-75">{user.profileData.telefono}</span>
              <NavLinkEdit>
                <i className="bi bi-pencil-fill px-2"></i>
              </NavLinkEdit>
            </div>
            <div className="d-flex py-1">
              <span className="w-25">Direccion:</span>
              <span className="w-75">{user.profileData.direccion}</span>
              <NavLinkEdit>
                <i className="bi bi-pencil-fill px-2"></i>
              </NavLinkEdit>
            </div>
            <div className="d-flex py-1">
              <span className="w-25">Correo:</span>
              <span className="w-75">{user.profileData.correo}</span>{' '}
              <NavLinkEdit>
                <i className="bi bi-pencil-fill px-2"></i>
              </NavLinkEdit>
            </div>
          </div>
        </>
      ) : (
        <>
          <span className="py-4">Usuario: {user.name}</span>
          <span className="py-4">
            Correo: {user.profileData.numero_documento}
          </span>
        </>
      )}
    </div>
  );
};
