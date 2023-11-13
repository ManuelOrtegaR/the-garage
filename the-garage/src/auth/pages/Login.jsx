import SingUpModal from '../components/SingUpModal';
import Alert from 'react-bootstrap/Alert';
import { useContext, useState } from 'react';
import {
  MainConteiner,
  TitlePg,
  ButtonStyled,
} from '../components/StyledsComponents';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';
import { AuthContext } from '../context/AuthContext';
import { signIn } from '../../api/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const emailRqd = z.string({
  required_error: 'El correo es requerido',
});

const passwordRqd = z.string({
  required_error: 'La contraseña es requerida',
});

const singUpSchema = z.object({
  email: emailRqd.email('Dirección de correo incorrecto'),
  password: passwordRqd

    .min(6, 'La contraseña debe tener mínimo 6 caracteres')
    .max(16, 'La contraseña debe tener máximo 16 caracteres'),
});

export function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const initialValues = {
    email: '',
    password: '',
  };

  const onLogin = async (formData) => {
    const response = await signIn(formData);

    if (response?.error) {
      toast.error(response.error.message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }

    const { name, type, token, user, typeData } = response;
    const profileData = {
      ...user,
      ...typeData,
    };
    login(name, type, token, profileData);
    navigate('/home', {
      replace: true,
    });
  };

  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    await onLogin(values);
    setSubmitting(false);
  };
  return (
    <MainConteiner className="img-fluid">
      <div className="login__contenedor p-5" style={{ minWidth: '700px' }}>
        <Link to="/home" className="text-decoration-none">
          <i className="bi bi-arrow-left"> </i>
          Volver
        </Link>
        <TitlePg className="mb-5">Inicio de Sesión</TitlePg>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={toFormikValidationSchema(singUpSchema)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form className="Form_login" onSubmit={handleSubmit}>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su correo"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={touched.email && errors.email ? 'is-invalid' : ''}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
                <Form.Text className="text-muted">
                  Nosotros nunca compartiremos su correo con nadie más.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={
                    touched.password && errors.password ? 'is-invalid' : ''
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 d-flex justify-content-between"
                controlId="formBasicCheckbox"
              >
                <NavLink
                  to={'/Recoverypassword'}
                  style={{ textDecoration: 'none', color: 'darkblue' }}
                >
                  ¿Olvidaste tu Contraseña?
                </NavLink>
              </Form.Group>
              <div className="d-flex justify-content-center">
                <ButtonStyled
                  variant="primary"
                  type="submit"
                  size="lg"
                  className="w-100"
                  disabled={isSubmitting}
                >
                  {!isSubmitting ? (
                    'Iniciar Sesión'
                  ) : (
                    <Spinner
                      as="span"
                      animation="grow"
                      role="status"
                      aria-hidden="true"
                    />
                  )}
                </ButtonStyled>
              </div>
              <div className="d-flex gap-1 mt-3 justify-content-center">
                <label>¿No tienes un usuario?</label>
                <NavLink onClick={handleShow} data-cy="signup">
                  Regístrate
                </NavLink>
              </div>
            </Form>
          )}
        </Formik>
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
      {showModal ? <SingUpModal setShowModal={setShowModal} /> : <></>}
    </MainConteiner>
  );
}
