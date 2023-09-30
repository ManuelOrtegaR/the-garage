import Image from 'react-bootstrap/Image';
import { AuthContext } from '../../../auth/context/AuthContext';
import { NavLinkProfile } from './StylesComponentsProfiles';
import { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { BtnSubmitStyled } from '../../../components';

export const TestProfiles = () => {
  const { user } = useContext(AuthContext);
  const formActive = false;
  const [active, setActive] = useState(formActive);

  console.log(user);

  function editForm(event) {
    setActive(!active);
  }

  return (
    <>
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
              <div className="d-flex py-1 align-items-center">
                <span className="w-50">Usuario:</span>
                <span className="w-75">
                  {!active ? (
                    user.name
                  ) : (
                    <Form.Control type="text" placeholder={user.name} />
                  )}
                </span>
              </div>
              <div className="d-flex py-1 align-items-center">
                <span className="w-50">Tipo de documento:</span>
                <span className="w-75">
                  {!active ? (
                    user.profileData.numero_documento
                  ) : (
                    <Form.Control
                      type="text"
                      placeholder={user.profileData.numero_documento}
                    />
                  )}
                </span>
              </div>
              <div className="d-flex py-1 align-items-center">
                <span className="w-50">No. Documento:</span>
                <span className="w-75">
                  {!active ? (
                    user.profileData.numero_documento
                  ) : (
                    <Form.Control
                      type="text"
                      placeholder={user.profileData.numero_documento}
                    />
                  )}
                </span>
              </div>
            </div>

            <div>
              <div className="d-flex py-1 align-items-center">
                <span className="w-25">Telefono:</span>
                <span className="w-75">
                  {!active ? (
                    user.profileData.telefono
                  ) : (
                    <Form.Control
                      type="text"
                      placeholder={user.profileData.telefono}
                    />
                  )}
                </span>
              </div>
              <div className="d-flex py-1 align-items-center">
                <span className="w-25">Direccion:</span>
                <span className="w-75">
                  {!active ? (
                    user.profileData.direccion
                  ) : (
                    <Form.Control
                      type="text"
                      placeholder={user.profileData.direccion}
                    />
                  )}
                </span>
              </div>
              <div className="d-flex py-1 align-items-center">
                <span className="w-25">Correo:</span>
                <span className="w-75">
                  {!active ? (
                    user.profileData.correo
                  ) : (
                    <Form.Control
                      type="email"
                      placeholder={user.profileData.correo}
                    />
                  )}
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <span className="py-4">Usuario: {user.name}</span>
            <span className="py-4">Correo: {user.profileData.correo}</span>
          </>
        )}
      </div>
      <div>
        <BtnSubmitStyled
          type="submit"
          className="fw-bold m-auto"
          onClick={editForm}
        >
          {!active ? (
            <>
              <i className="bi bi-pencil-fill px-2"></i> Editar
            </>
          ) : (
            <>Guardar</>
          )}
        </BtnSubmitStyled>
      </div>
    </>
  );
};
