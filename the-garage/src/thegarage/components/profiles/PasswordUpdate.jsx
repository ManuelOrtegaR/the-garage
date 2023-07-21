import { BtnSubmitStyled } from '../../../components';
import Form from 'react-bootstrap/Form';

export const PasswordUpdate = () => {
  return (
    <div className="m-auto w-25 py-4">
      <h4 className="text-center">
        <strong>CAMBIAR CONTRASEÑA</strong>
      </h4>
      <Form className="my-4">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="lh-1">Contraseña Actual</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña actual"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="lh-1">Nueva Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su nueva contraseña"
          />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
          <Form.Label className="lh-1">Confirmar Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirme la nueva contraseña"
          />
        </Form.Group>

        <BtnSubmitStyled className="w-100">Actualizar</BtnSubmitStyled>
      </Form>
    </div>
  );
};
