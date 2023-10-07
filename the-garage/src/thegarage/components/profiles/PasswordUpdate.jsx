import { BtnSubmitStyled } from '../../../components';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PasswordUpdate = () => {
  const updateSucces = (event) => {
    event.preventDefault();
    toast.success('Se a actualizado exitosamente!!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

    // toast.warn('Error de autentificacion', {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
  };

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
        <Form.Group className="mb-3" controlId="formBasicNewPassword">
          <Form.Label className="lh-1">Nueva Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su nueva contraseña"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 w-100"
          controlId="formBasicConfirmNewPassword"
        >
          <Form.Label className="lh-1">Confirmar Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirme la nueva contraseña"
          />
        </Form.Group>

        <BtnSubmitStyled className="w-100" type="submit" onClick={updateSucces}>
          Actualizar
        </BtnSubmitStyled>
      </Form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
