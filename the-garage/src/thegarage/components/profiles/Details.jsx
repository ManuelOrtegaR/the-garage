import { useContext, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';
import { ErrorMessage, Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import NavLink from 'react-bootstrap/NavLink';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { updateCompanyDetails } from '../../../api/profile';
import { AuthContext } from '../../../auth/context/AuthContext';
import { BtnSubmitStyled } from '../../../components/StyledButtons';
import { SpanForm } from './StylesComponentsProfiles';

export const Details = () => {
  const { user: userContext } = useContext(AuthContext);
  const [user, setUser] = useState(userContext);
  const [handelUpdate, setHandelUpdate] = useState(false);

  const updateDetailsSchema = z.object({
    sitio_web: z.string().optional(),
    camara_comercio: z.string().optional(),
    representante_legal: z.string().optional(),
    tipo_documento_representante: z.string().optional(),
    numero_documento_representante: z.string().optional(),
    correo_representante: z.string().optional(),
    descripcion: z.string().optional(),
  });

  const initialValues = {
    sitio_web: user.profileData.sitio_web,
    camara_comercio: user.profileData.camara_comercio,
    representante_legal: user.profileData.representante_legal,
    tipo_documento_representante: user.profileData.tipo_documento_representante,
    numero_documento_representante:
      user.profileData.numero_documento_representante,
    correo_representante: user.profileData.correo_representante,
    descripcion: user.profileData.descripcion,
  };

  const documentTypes = [
    'Cédula de Ciudadanía',
    'Cédula de Extranjería',
    'Pasaporte',
  ];

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await updateCompanyDetails(values);
      const newUser = {
        ...user,
        profileData: {
          ...user.profileData,
          ...response.typeData,
        },
      };
      setUser(newUser);
      toast.success('Se actualizaron los datos!!', {
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
      toast.error('No fue posible actualizar los datos', {
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
    }
  };

  return (
    <div className="m-auto py-4 w-75">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={toFormikValidationSchema(updateDetailsSchema)}
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
            <Row className="gap-3">
              <Col>
                <Form.Group
                  className="d-flex justify-content-center align-items-center mb-3"
                  controlId="formLegalRepresentative"
                >
                  <Form.Label className="w-50">Representante Legal:</Form.Label>
                  {handelUpdate ? (
                    <>
                      <Form.Control
                        type="texto"
                        placeholder="Ingrese el nombre del representante legal"
                        name="representante_legal"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.representante_legal}
                        className={
                          touched.representante_legal &&
                          errors.representante_legal
                            ? 'is-invalid'
                            : ''
                        }
                      />
                      <ErrorMessage
                        name="representante_legal"
                        component="div"
                        className="invalid-feedback"
                      />
                    </>
                  ) : (
                    <SpanForm>{user.profileData.representante_legal}</SpanForm>
                  )}
                </Form.Group>
                <Form.Group
                  className="d-flex justify-content-center align-items-center mb-3"
                  controlId="formLegalRepresentativeEmail"
                >
                  <Form.Label className="w-50">Correo:</Form.Label>
                  {handelUpdate ? (
                    <>
                      <Form.Control
                        type="texto"
                        placeholder="Ingrese el correo del representante legal"
                        name="correo_representante"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.correo_representante}
                        className={
                          touched.correo_representante &&
                          errors.correo_representante
                            ? 'is-invalid'
                            : ''
                        }
                      />
                      <ErrorMessage
                        name="correo_representante"
                        component="div"
                        className="invalid-feedback"
                      />
                    </>
                  ) : (
                    <SpanForm>{user.profileData.correo_representante}</SpanForm>
                  )}
                </Form.Group>

                <Form.Group
                  className="d-flex justify-content-center align-items-center   mb-3"
                  controlId="formWebSite"
                >
                  <Form.Label className="w-50">Sitio Web:</Form.Label>
                  {handelUpdate ? (
                    <>
                      <Form.Control
                        type="texto"
                        placeholder="Ingrese su nombre completo"
                        name="sitio_web"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.sitio_web}
                        className={
                          touched.sitio_web && errors.sitio_web
                            ? 'is-invalid'
                            : ''
                        }
                      />
                      <ErrorMessage
                        name="sitio_web"
                        component="div"
                        className="invalid-feedback"
                      />
                    </>
                  ) : (
                    <SpanForm>{user.profileData.sitio_web}</SpanForm>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="d-flex justify-content-center align-items-center mb-3"
                  controlId="formLegalRepresentative"
                >
                  <Form.Label className="w-50">Tipo de documento:</Form.Label>
                  {handelUpdate ? (
                    <>
                      <Form.Select
                        name="tipo_documento_representante"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.tipo_documento_representante}
                      >
                        <option value="0">
                          Selecciona tu tipo de documento
                        </option>
                        {documentTypes.map((documento) => {
                          return (
                            <option key={documento} value={documento}>
                              {documento}
                            </option>
                          );
                        })}
                      </Form.Select>
                      <ErrorMessage
                        name="tipo_documento_representante"
                        component="div"
                        className="invalid-feedback"
                      />
                    </>
                  ) : (
                    <SpanForm>
                      {user.profileData.tipo_documento_representante}
                    </SpanForm>
                  )}
                </Form.Group>
                <Form.Group
                  className="d-flex justify-content-center align-items-center mb-3"
                  controlId="formLegalRepresentativeDocumentNumber"
                >
                  <Form.Label className="w-50">No. documento:</Form.Label>
                  {handelUpdate ? (
                    <>
                      <Form.Control
                        type="texto"
                        placeholder="Ingrese el número de documento del representante legal"
                        name="numero_documento_representante"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.numero_documento_representante}
                        className={
                          touched.numero_documento_representante &&
                          errors.numero_documento_representante
                            ? 'is-invalid'
                            : ''
                        }
                      />
                      <ErrorMessage
                        name="numero_documento_representante"
                        component="div"
                        className="invalid-feedback"
                      />
                    </>
                  ) : (
                    <SpanForm>
                      {user.profileData.numero_documento_representante}
                    </SpanForm>
                  )}
                </Form.Group>
                <Form.Group
                  controlId="formFileCCommerce"
                  className="d-flex justify-content-center align-items-center mb-3"
                >
                  <Form.Label className="w-50">Cámara de Comercio</Form.Label>
                  {handelUpdate ? (
                    <Form.Control
                      type="file"
                      size="sm"
                      name="c_commerce_document"
                      disabled
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setFieldValue('c_commerce_document', file);
                      }}
                    />
                  ) : (
                    <SpanForm>
                      <NavLink
                        href={user.profileData.camara_comercio}
                        target="_blank"
                        style={{ color: 'blue' }}
                      >
                        Documento.pdf
                      </NavLink>
                    </SpanForm>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Form.Group
              className="d-flex justify-content-center align-items-center mb-3"
              controlId="formBasicDescription"
            >
              <Form.Label style={{ marginRight: '10px' }}>
                Descripción:
              </Form.Label>
              {handelUpdate ? (
                <>
                  <Form.Control
                    type="texto"
                    as="textarea"
                    placeholder="ingrese una breve descripción de su empresa"
                    name="descripcion"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.descripcion}
                    className={
                      touched.descripcion && errors.descripcion
                        ? 'is-invalid'
                        : ''
                    }
                  />
                  <ErrorMessage
                    name="descripcion"
                    component="div"
                    className="invalid-feedback"
                  />
                </>
              ) : (
                <SpanForm style={{ height: '62px' }}>
                  {user.profileData.descripcion}
                </SpanForm>
              )}
            </Form.Group>
            <div className="d-flex justify-content-center gap-5 my-3">
              <BtnSubmitStyled
                type="button"
                hidden={handelUpdate}
                disabled={isSubmitting}
                onClick={() => {
                  setHandelUpdate(true);
                }}
              >
                Editar
              </BtnSubmitStyled>
              <BtnSubmitStyled
                type="submit"
                hidden={!handelUpdate}
                disabled={isSubmitting}
                onClick={() => {
                  setHandelUpdate(false);
                }}
              >
                Guardar
              </BtnSubmitStyled>
              <BtnSubmitStyled
                type="button"
                variant="light"
                hidden={!handelUpdate}
                disabled={isSubmitting}
                onClick={() => {
                  setHandelUpdate(false);
                }}
              >
                Cancelar
              </BtnSubmitStyled>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer
        position="top-center"
        autoClose={3000}
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
