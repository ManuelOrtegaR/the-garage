import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import { Formik, ErrorMessage } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';
import { BtnSubmitStyled } from '../../components/StyledButtons';
import { signUp } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { useAdressLocation } from '../../domain/useAddressLocation';

const clientSignUpSchema = z
  .object({
    email: z
      .string({
        required_error: 'El correo es requerido',
      })
      .email('Dirección de correo incorrecto'),
    department: z.string(),
    city: z.string(),
    address: z.string({
      required_error: 'La dirección es requerida',
    }),
    password: z
      .string({
        required_error: 'La contraseña es requerida',
      })
      .min(6, 'La contraseña debe tener mínimo 6 caracteres')
      .max(16, 'La contraseña debe tener máximo 16 caracteres'),
    cpassword: z
      .string({
        required_error: 'La confirmación de contraseña es requerida',
      })
      .min(6, 'La contraseña debe tener mínimo 6 caracteres')
      .max(16, 'La contraseña debe tener máximo 16 caracteres'),
    name: z.string({
      required_error: 'El nombre es requerido',
    }),
    document_type: z.string(),
    document_number: z.string(),
    phone_number: z
      .string()
      .min(10, 'El teléfono debe tener mínimo 10 digitos')
      .max(15, 'El teléfono debe tener máximo 15 digitos'),
  })
  .refine((data) => data.password === data.cpassword, {
    message: 'Las contraseñas no coinciden',
    path: ['cpassword'], // path of error
  });

function ClientSingUp() {
  const { departments, city, cargarCiudades } = useAdressLocation();

  const navigate = useNavigate();

  const documentTypes = [
    'Cédula de Ciudadanía',
    'Cédula de Extranjería',
    'Pasaporte',
  ];

  const handleChangeDepartment = async (event) => {
    const value = event.target.value;
    cargarCiudades(value);
  };

  const initialValues = {
    name: '',
    email: '',
    document_type: '',
    document_number: '',
    phone_number: '',
    department: '',
    city: '',
    address: '',
    password: '',
    cpassword: '',
  };

  const onClientSignUp = async (formData) => {
    const { cpassword, ...data } = formData;
    const response = await signUp(data, 'cliente');
    navigate('/confirmacion', { state: response });
  };

  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    await onClientSignUp(values);
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={toFormikValidationSchema(clientSignUpSchema)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <Form className="Form_client" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="texto"
                placeholder="Ingrese su nombre completo"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={touched.name && errors.name ? 'is-invalid' : ''}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDepartment">
              <Form.Label>Departamento</Form.Label>
              <Form.Select
                name="department"
                onChange={(e) => {
                  handleChange(e), handleChangeDepartment(e);
                }}
                onBlur={handleBlur}
                value={values.department}
              >
                <option value="0">Selecciona tu departamento</option>
                {departments.map(({ departamento }) => {
                  return (
                    <option key={departamento} value={departamento}>
                      {departamento}
                    </option>
                  );
                })}
              </Form.Select>
              <ErrorMessage
                name="department"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDepartment">
              <Form.Label>Ciudad</Form.Label>
              <Form.Select
                name="city"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
                disabled={city.length === 0}
              >
                <option value="0">Selecciona tu ciudad</option>
                {city.map((ciudad) => {
                  return (
                    <option key={ciudad.municipio} value={ciudad.municipio}>
                      {ciudad.municipio}
                    </option>
                  );
                })}
              </Form.Select>
              <ErrorMessage
                name="city"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="texto"
                placeholder="Ingrese su dirección"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                className={
                  touched.address && errors.address ? 'is-invalid' : ''
                }
              />
              <ErrorMessage
                name="address"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoto">
              <Form.Label>Foto de perfil</Form.Label>
              <Form.Control
                type="file"
                name="profile_photo"
                accept=".jpg, .jpeg"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setFieldValue('profile_photo', file);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDocumentType">
              <Form.Label>Tipo de documento</Form.Label>
              <Form.Select
                name="document_type"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.document_type}
              >
                <option value="0">Selecciona tu tipo de documento</option>
                {documentTypes.map((documento) => {
                  return (
                    <option key={documento} value={documento}>
                      {documento}
                    </option>
                  );
                })}
              </Form.Select>
              <ErrorMessage
                name="document_type"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDocumentNumber">
              <Form.Label>Número de documento</Form.Label>
              <Form.Control
                type="texto"
                placeholder="Ingrese su número de documento"
                name="document_number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.document_number}
                className={
                  touched.document_number && errors.document_number
                    ? 'is-invalid'
                    : ''
                }
              />
              <ErrorMessage
                name="document_number"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Ingrese su telefono</Form.Label>
              <Form.Control
                type="texto"
                placeholder="Ingrese su número de teléfono"
                name="phone_number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone_number}
                className={
                  touched.phone_number && errors.phone_number
                    ? 'is-invalid'
                    : ''
                }
              />
              <ErrorMessage
                name="phone_number"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
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
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirme su contraseña"
                name="cpassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cpassword}
                className={
                  touched.cpassword && errors.cpassword ? 'is-invalid' : ''
                }
              />
              <ErrorMessage
                name="cpassword"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <BtnSubmitStyled
                type="submit"
                disabled={isSubmitting}
                className="w-100 p-2"
              >
                {!isSubmitting ? (
                  'Registrate'
                ) : (
                  <Spinner
                    as="span"
                    animation="grow"
                    role="status"
                    aria-hidden="true"
                  />
                )}
              </BtnSubmitStyled>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default ClientSingUp;
