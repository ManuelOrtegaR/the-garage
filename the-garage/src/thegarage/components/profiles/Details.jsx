import { useContext, useState } from 'react';
import { BtnSubmitStyled } from '../../../components/StyledButtons';
import { AuthContext } from '../../../auth/context/AuthContext';
import { Button, Form, NavLink } from 'react-bootstrap';

export const Details = () => {
  const { user } = useContext(AuthContext);
  const active = false;
  const [onEdit, setOnEdit] = useState(active);

  function activate(event) {
    setOnEdit(!onEdit);
  }

  return (
    <div
      className="m-auto border rounded px-3 pt-2 pb-3"
      style={{ width: '500px' }}
    >
      <span className="fw-bold fs-5 mx-auto border-bottom">
        Informacion de empresa
      </span>
      <div className="mt-4 text-nowrap">
        <div className="d-flex justify-content-around py-1 align-items-center">
          <span className="w-50">NIT</span>
          <span className="w-50">
            {!onEdit ? (
              user.className == 'Cliente' ? (
                user.profileData.numero_documento
              ) : (
                user.profileData.numero_documento_empresa
              )
            ) : (
              <Form.Control
                type="text"
                placeholder={
                  user.className == 'Cliente'
                    ? user.profileData.numero_documento
                    : user.profileData.numero_documento_empresa
                }
              />
            )}
          </span>
        </div>
        <div className="d-flex justify-content-around py-1 align-items-center">
          <span className="w-50">Pagina Web</span>
          <span className="w-50">
            {!onEdit ? (
              user.profileData.sitio_web || 'No tiene'
            ) : (
              <Form.Control
                type="text"
                placeholder={user.profileData.sitio_web || 'No tiene'}
              />
            )}
          </span>
        </div>
        <div className="d-flex justify-content-around py-1 align-items-center">
          <span className="w-50">Camara y comercio</span>
          <span className="w-50">
            {!onEdit ? (
              <NavLink href={user.profileData.camara_comercio} target="_blank">
                Camara de comercio
              </NavLink>
            ) : (
              <Form.Control type="file" size="sm" />
            )}
          </span>
        </div>
        <div className="d-flex flex-column py-1">
          <span className="text-decoration-underline fw-bold mt-1">
            Descripción:
          </span>
          <span className="mt-2">
            {!onEdit ? (
              user.profileData.descripcion || 'No tiene'
            ) : (
              <Form.Control
                as="textarea"
                rows={3}
                placeholder={user.profileData.descripcion}
              />
            )}
          </span>
        </div>

        <div className="d-flex justify-content-around mt-4">
          {!onEdit ? (
            <Button className="w-25" onClick={activate}>
              Editar
            </Button>
          ) : (
            <BtnSubmitStyled
              className="w-25"
              onClick={() => {
                setOnEdit(false);
              }}
            >
              Confirmar
            </BtnSubmitStyled>
          )}
        </div>
      </div>
    </div>
  );
};
