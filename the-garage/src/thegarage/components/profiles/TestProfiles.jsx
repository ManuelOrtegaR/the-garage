import { useContext, useRef, useState } from 'react';
import { instance as http } from '../../../api/http';
import { Image, Form } from 'react-bootstrap';
import { AuthContext } from '../../../auth/context/AuthContext';
import { NavLinkProfile } from './StylesComponentsProfiles';
import { BtnSubmitStyled } from '../../../components';

export const TestProfiles = () => {
  const { user } = useContext(AuthContext);
  const [active, setActive] = useState(false);
  const [formData, setFormData] = useState({
    editUsuario: user.name,
    editTelefono: user.profileData.telefono,
    editDireccion: user.profileData.direccion,
    editEmail: user.profileData.correo,
  });

  const fileInputRef = useRef(null);

  const changeImageInput = () => {
    fileInputRef.current.click();
  };

  // Manejar el cambio de valores en los campos del formulario
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para enviar los datos actualizados al backend
  const handleSubmit = async () => {
    try {
      const response = await http.put(`/${user.id}`, {
        userData: formData,
      });

      // Manejar la respuesta del backend si es necesario
      console.log('Datos actualizados:', response.data);
      setActive(false);
    } catch (error) {
      // Manejar errores
      console.error('Error al actualizar datos:', error);
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-around">
        <div className="d-flex flex-column text-center ">
          <div className="position-relative mb-4">
            <Image
              src={user.profileData.url_foto}
              style={{ height: 100, width: 100 }}
              roundedCircle
            />

            <Form.Control
              type="file"
              size="sm"
              ref={fileInputRef}
              style={{ display: 'none' }}
            />

            <NavLinkProfile
              className="position-absolute top-100 start-50 translate-middle"
              onClick={changeImageInput}
            >
              <Image
                src="../../../../assets/images/home/tecnologiesIcons/editImage.svg"
                style={{ height: 25, width: 25 }}
              />
            </NavLinkProfile>
          </div>
          <span className="lh-1">{user.name}</span>
        </div>
        <div className="col-4">
          <div className="d-flex py-1 align-items-center">
            <span className="col-5">Usuario:</span>
            <span>
              {!active ? (
                user.name
              ) : (
                <Form.Control
                  type="text"
                  name="editUsuario"
                  value={formData.editUsuario}
                  onChange={handleFormChange}
                />
              )}
            </span>
          </div>
          <div className="d-flex py-1 align-items-center">
            <span className="col-5">Tipo de documento:</span>
            <span>
              {!active ? (
                user.userClass == 'Cliente' ? (
                  user.profileData.tipo_documento
                ) : (
                  user.profileData.tipo_documento_empresa
                )
              ) : (
                <Form.Control
                  disabled
                  type="text"
                  placeholder={
                    user.userClass == 'Cliente'
                      ? user.profileData.tipo_documento
                      : user.profileData.tipo_documento_empresa
                  }
                />
              )}
            </span>
          </div>
          <div className="d-flex py-1 align-items-center">
            <span className="col-5">No. Documento:</span>
            <span>
              {!active ? (
                user.userClass == 'Cliente' ? (
                  user.profileData.numero_documento
                ) : (
                  user.profileData.numero_documento_empresa
                )
              ) : (
                <Form.Control
                  disabled
                  type="text"
                  placeholder={
                    user.userClass == 'Cliente'
                      ? user.profileData.numero_documento
                      : user.profileData.numero_documento_empresa
                  }
                />
              )}
            </span>
          </div>
        </div>

        <div>
          <div className="d-flex py-1 align-items-center">
            <span className="col-3">Telefono:</span>
            <span className="ms-3">
              {!active ? (
                user.profileData.telefono
              ) : (
                <Form.Control
                  type="text"
                  name="editTelefono"
                  value={formData.editTelefono}
                  onChange={handleFormChange}
                />
              )}
            </span>
          </div>
          <div className="d-flex py-1 align-items-center">
            <span className="col-3">Direccion:</span>
            <span className="ms-3">
              {!active ? (
                user.profileData.direccion
              ) : (
                <Form.Control
                  type="text"
                  name="editDireccion"
                  value={formData.editDireccion}
                  onChange={handleFormChange}
                />
              )}
            </span>
          </div>
          <div className="d-flex py-1 align-items-center">
            <span className="col-3">Correo:</span>
            <span className="ms-3">
              {!active ? (
                user.profileData.correo
              ) : (
                <Form.Control
                  type="email"
                  name="editEmail"
                  value={formData.editEmail}
                  onChange={handleFormChange}
                />
              )}
            </span>
          </div>
        </div>
      </div>
      <div>
        <BtnSubmitStyled
          type="submit"
          className="fw-bold m-auto"
          onClick={active ? handleSubmit : () => setActive(true)}
        >
          {active ? (
            'Guardar'
          ) : (
            <>
              <i className="bi bi-pencil-fill px-2"></i> Editar
            </>
          )}
        </BtnSubmitStyled>
      </div>
    </>
  );
};
