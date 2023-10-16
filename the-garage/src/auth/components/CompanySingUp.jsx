import { Formik, ErrorMessage } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import { BtnSubmitStyled } from '../../components/StyledButtons';
import { signUp } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { useAdressLocation } from '../../domain/useAddressLocation';

const companySignUpSchema = z
  .object({
    nit: z
      .string({
        required_error: 'El NIT es requerido',
      })
      .length(9, 'El NIT debe tener 9 dígitos'),
    name: z.string({
      required_error: 'El nombre o razón social es requerido',
    }),
    address: z.string({
      required_error: 'La dirección es requerida',
    }),
    department: z.string({
      required_error: 'El departamento es requerido',
    }),
    city: z.string({
      required_error: 'La ciudad es requerida',
    }),
    phone: z
      .string({
        required_error: 'El teléfono o celular es requerido',
      })
      .length(10, 'El teléfono debe tener 10 dígitos'),
    website: z.string().url().optional(),
    email: z
      .string({
        required_error: 'El correo es requerido',
      })
      .email('Dirección de correo incorrecto'),
    legal_rep_name: z.string({
      required_error: 'El nombre del representante legal es requerido',
    }),
    legal_rep_document_type: z.string({
      required_error: 'El tipo de documento es requerido',
    }),
    legal_rep_document_number: z.string({
      required_error: 'El número de documento es requerido',
    }),
    legal_rep_email: z
      .string({
        required_error: 'El correo es requerido',
      })
      .email('Dirección de correo incorrecto'),
    description: z.string({
      required_error: 'La descripción es requerida',
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
  })
  .refine((data) => data.password === data.cpassword, {
    message: 'Las contraseñas no coinciden',
    path: ['cpassword'], // path of error
  });

function CompanySingUp() {
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
    nit: '',
    name: '',
    address: '',
    department: '',
    city: '',
    phone: '',
    website: '',
    legal_rep_name: '',
    legal_rep_document_type: '',
    legal_rep_document_number: '',
    legal_rep_email: '',
    description: '',
    email: '',
    password: '',
    cpassword: '',
  };

  const onClientSignUp = async (formData) => {
    const { cpassword, ...data } = formData;
    const response = await signUp(data, 'empresa');
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
        validationSchema={toFormikValidationSchema(companySignUpSchema)}
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
          <Form className="Form_company m-5" onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formLInfo">
                  <Form.Label>NIT</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el NIT de la empresa"
                    name="nit"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nit}
                    className={touched.nit && errors.nit ? 'is-invalid' : ''}
                  />
                  <ErrorMessage
                    name="nit"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Nombre o Razón Social</Form.Label>
                  <Form.Control
                    type="texto"
                    placeholder="Ingrese su Nombre o Razón Social"
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
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formContactAddress">
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
            <Row>
              <Col>
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
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicCity">
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
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formContactPhone">
                  <Form.Label>Teléfono fijo/movil</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su numero de teléfono"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    className={
                      touched.phone && errors.phone ? 'is-invalid' : ''
                    }
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formContact">
                  <Form.Label>Página WEB </Form.Label>
                  <Form.Control
                    type="texto"
                    placeholder="Ingrese la URL de su página WEB"
                    name="website"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.website}
                    className={
                      touched.website && errors.website ? 'is-invalid' : ''
                    }
                  />
                  <ErrorMessage
                    name="website"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
              </Col>
            </Row>

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

            <Row>
              <Col>
                <Form.Group controlId="formFileCCommerce" className="mb-3">
                  <Form.Label>Cámara de Comercio</Form.Label>
                  <Form.Control
                    type="file"
                    size="sm"
                    name="c_commerce_document"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setFieldValue('c_commerce_document', file);
                    }}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formFileIMG" className="mb-3">
                  <Form.Label>Imagen o Logo</Form.Label>
                  <Form.Control
                    type="file"
                    size="sm"
                    name="profile_photo"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setFieldValue('profile_photo', file);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicRepName">
              <Form.Label>Nombre del Representante Legal</Form.Label>
              <Form.Control
                type="texto"
                placeholder="Ingrese su nombre completo"
                name="legal_rep_name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.legal_rep_name}
                className={
                  touched.legal_rep_name && errors.legal_rep_name
                    ? 'is-invalid'
                    : ''
                }
              />
              <ErrorMessage
                name="legal_rep_name"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicDocumentType">
                  <Form.Label>
                    Tipo de documento del Representante Legal
                  </Form.Label>
                  <Form.Select
                    name="legal_rep_document_type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.legal_rep_document_type}
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
                    name="legal_rep_document_type"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicDocumentNumber"
                >
                  <Form.Label>
                    Número de documento del Representante Legal
                  </Form.Label>
                  <Form.Control
                    type="texto"
                    placeholder="Ingrese su número de documento"
                    name="legal_rep_document_number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.legal_rep_document_number}
                    className={
                      touched.legal_rep_document_number &&
                      errors.legal_rep_document_number
                        ? 'is-invalid'
                        : ''
                    }
                  />
                  <ErrorMessage
                    name="legal_rep_document_number"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicRepEmail">
              <Form.Label>
                Correo Electrónico del Representante Legal
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su correo"
                name="legal_rep_email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.legal_rep_email}
                className={
                  touched.legal_rep_email && errors.legal_rep_email
                    ? 'is-invalid'
                    : ''
                }
              />
              <ErrorMessage
                name="legal_rep_email"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicInfo">
              <Form.Label>Descripción de la empresa</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Breve descripción de su negocio o slogan"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                className={
                  touched.description && errors.description ? 'is-invalid' : ''
                }
              />
              <ErrorMessage
                name="description"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <Row>
              <Col>
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
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
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
              </Col>
            </Row>
            <div className="d-flex justify-content-center">
              <BtnSubmitStyled type="submit" disabled={isSubmitting}>
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

export default CompanySingUp;
