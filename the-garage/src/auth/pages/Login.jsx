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
// import googleIcon from '../../../assets/authIcons/google-icono.svg';
// import facebookIcon from '../../../assets/authIcons/facebook-icono.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';
import { AuthContext } from '../context/AuthContext';
import { signIn } from '../../api/auth';

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
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const handleShow = () => setShowModal(true);
  const initialValues = {
    email: '',
    password: '',
  };

  const onLogin = async (formData) => {
    const response = await signIn(formData);

    if (response?.error) {
      setError(true);
      setErrorMessage(response.error.message);
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
    setError(false);
    setErrorMessage('');
    await onLogin(values);
    setSubmitting(false);
  };
  return (
    <MainConteiner className="img-fluid">
      <div className="login d-flex row w-50 bg-white">
        <div className="login__contenedor">
          {error && (
            <Alert
              variant="danger"
              style={{ width: '75%', margin: 'auto', marginTop: '10px' }}
            >
              {errorMessage}
            </Alert>
          )}
          <TitlePg>Inicio de Sesión</TitlePg>
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
              <Form className="Form_login m-5 " onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su correo"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={
                      touched.email && errors.email ? 'is-invalid' : ''
                    }
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
                <Form.Group className="mb-3" controlId="formBasicPassword">
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
                  <Form.Check type="checkbox" label="Recuerdáme" />
                  <NavLink
                    to={'/Recoverypassword'}
                    style={{ textDecoration: 'none', color: 'darkblue' }}
                  >
                    ¿Olvidaste tu Constraseña?
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
                <div className="d-flex gap-1 mt-2 justify-content-center">
                  <label>¿No tienes un usuario?</label>
                  <NavLink onClick={handleShow} data-cy="signup">
                    Registrate
                  </NavLink>
                </div>
              </Form>
            )}
          </Formik>
          {/* <div className="d-flex justify-content-center m-2">
            <span>o</span>
          </div>
          <div className="btn d-flex gap-2 justify-content-center border mb-1 shadow-sm">
            <img src={googleIcon} className="register_Methods"></img>
            <label>Continúa con Google</label>
          </div>
          <div className="btn d-flex gap-2 justify-content-center border shadow-sm">
            <img src={facebookIcon} className="register_Methods"></img>
            <label>Continúa con Facebook</label>
          </div> */}
        </div>
      </div>
      {showModal ? <SingUpModal /> : <></>}
    </MainConteiner>
  );
}
