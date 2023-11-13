import { BtnSubmitStyled } from '../../../components';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, ErrorMessage } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';
import { updatePassword } from '../../../api/profile';
import { useState } from 'react';

export const PasswordUpdate = () => {
  const [initialValues, setInitialValues] = useState({
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const { password, newPassword } = values;
    try {
      await updatePassword(password, newPassword);
      toast.success('Se ha actualizado exitosamente!!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
      toast.error('Contraseña incorrecta', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  const changePasswordSchema = z
    .object({
      password: z
        .string({
          required_error: 'La contraseña es requerida',
        })
        .min(8, 'La contraseña debe tener mínimo 8 caracteres')
        .max(16, 'La contraseña debe tener máximo 16 caracteres'),
      newPassword: z
        .string({
          required_error: 'La nueva contraseña es requerida',
        })
        .min(8, 'La nueva contraseña debe tener mínimo 8 caracteres')
        .max(16, 'La nueva contraseña debe tener máximo 16 caracteres'),
      confirmNewPassword: z
        .string({
          required_error: 'La confirmación de contraseña es requerida',
        })
        .min(8, 'La nueva contraseña debe tener mínimo 8 caracteres')
        .max(16, 'La nueva contraseña debe tener máximo 16 caracteres'),
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
      message: 'Las contraseñas no coinciden',
      path: ['confirmNewPassword'],
    });

  return (
    <div className="m-auto py-4">
      <h4 className="text-center">
        <strong>CAMBIAR CONTRASEÑA</strong>
      </h4>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={toFormikValidationSchema(changePasswordSchema)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          resetForm,
        }) => (
          <Form className="my-4" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="lh-1">Contraseña Actual</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña actual"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
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
            <Form.Group className="mb-3" controlId="formBasicNewPassword">
              <Form.Label className="lh-1">Nueva Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su nueva contraseña"
                name="newPassword"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  touched.newPassword && errors.newPassword ? 'is-invalid' : ''
                }
              />
              <ErrorMessage
                name="newPassword"
                component="div"
                className="invalid-feedback"
              />
              <Form.Text className="text-muted">
                La contraseña debe contener almenos una mayúscula, una minúscula
                y un número.
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3 w-100"
              controlId="formBasicConfirmNewPassword"
            >
              <Form.Label className="lh-1">Confirmar Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirme la nueva contraseña"
                name="confirmNewPassword"
                value={values.confirmNewPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  touched.confirmNewPassword && errors.confirmNewPassword
                    ? 'is-invalid'
                    : ''
                }
              />
              <ErrorMessage
                name="confirmNewPassword"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <BtnSubmitStyled
              className="w-100"
              type="submit"
              disabled={isSubmitting}
              onReset={resetForm}
            >
              Actualizar
            </BtnSubmitStyled>
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
  );
};
