/* eslint-disable react/prop-types */
import { useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';
import { ErrorMessage, Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import editImage from '../../../../assets/images/profile/editImage.svg';
import { updateClientProfile } from '../../../api/profile';
import { getSession } from '../../../api/session';
import { BtnSubmitStyled } from '../../../components';
import { NavLinkProfile, SpanForm } from './StylesComponentsProfiles';

export const ClientProfile = ({
  user,
  login,
  handelUpdate,
  setHandelUpdate,
  departments,
  city,
  handleChangeDepartment,
}) => {
  const updateClientSchema = z.object({
    nombre_completo: z
      .string({ required_error: 'El nombre es requerido' })
      .min(3, 'Mínimo 3 caracteres'),
    tipo_documento: z.string().min(3, 'Mínimo 3 caracteres'),
    numero_documento: z.string().min(3, 'Mínimo 3 caracteres'),
    direccion: z
      .string({ required_error: 'La dirección es requerida' })
      .min(3, 'Mínimo 3 caracteres'),
    departamento: z.string().min(3, 'Mínimo 3 caracteres'),
    ciudad: z.string().min(3, 'Mínimo 3 caracteres'),
    correo: z.string().min(3, 'Mínimo 3 caracteres'),
    telefono: z
      .string({ required_error: 'El teléfono es requerido' })
      .min(3, 'Mínimo 3 caracteres'),
  });

  const initialValues = {
    nombre_completo: user.profileData.nombre_completo,
    tipo_documento: user.profileData.tipo_documento,
    numero_documento: user.profileData.numero_documento,
    direccion: user.profileData.direccion,
    departamento: user.profileData.departamento,
    ciudad: user.profileData.ciudad,
    correo: user.profileData.correo,
    telefono: user.profileData.telefono,
  };

  const fileInputRef = useRef(null);

  const changeImageInput = () => {
    fileInputRef.current.click();
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await updateClientProfile(values);
      const token = getSession();
      const { nombre_completo: name } = response.typeData;
      const type = response.user.tipo_usuario;
      const profileData = {
        ...response.user,
        ...response.typeData,
      };
      login(name, type, token, profileData);
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
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={toFormikValidationSchema(updateClientSchema)}
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
          <Form className="Form_client w-100" onSubmit={handleSubmit}>
            <Row>
              <Col className="d-flex col-12 col-md-2 mb-3 align-items-center justify-content-center">
                <div className="position-relative">
                  <Image
                    src={user.profileData.url_foto}
                    style={{ height: 125, width: 125 }}
                    roundedCircle
                  />

                  <Form.Control
                    type="file"
                    size="sm"
                    name="profile_photo"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    accept=".jpg, .jpeg"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setFieldValue('profile_photo', file);
                    }}
                  />

                  <NavLinkProfile
                    className="position-absolute top-100 start-50 translate-middle"
                    onClick={changeImageInput}
                    hidden={!handelUpdate}
                  >
                    <Image src={editImage} style={{ height: 25, width: 25 }} />
                  </NavLinkProfile>
                </div>
              </Col>
              <Col className="col-12 col-md-10 mb-3">
                <Row className="align-items-start mb-2">
                  <Col className="col-6">
                    <Form.Group
                      className="d-flex justify-content-center align-items-center"
                      controlId="formBasicName"
                    >
                      <Form.Label className="w-50">Nombre Completo:</Form.Label>
                      {handelUpdate ? (
                        <>
                          <Form.Control
                            type="texto"
                            placeholder="Ingrese su nombre completo"
                            name="nombre_completo"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.nombre_completo}
                            className={
                              touched.nombre_completo && errors.nombre_completo
                                ? 'is-invalid'
                                : ''
                            }
                          />
                          <ErrorMessage
                            name="nombre_completo"
                            component="div"
                            className="invalid-feedback"
                          />
                        </>
                      ) : (
                        <SpanForm>{user.name}</SpanForm>
                      )}
                    </Form.Group>
                  </Col>
                  <Col className="col-6">
                    <Form.Group
                      className="d-flex justify-content-center align-items-center"
                      controlId="formBasicDepartment"
                    >
                      <Form.Label className="w-50">Departamento:</Form.Label>
                      {handelUpdate ? (
                        <>
                          <Form.Select
                            name="departamento"
                            onChange={(e) => {
                              handleChange(e), handleChangeDepartment(e);
                            }}
                            onBlur={handleBlur}
                            value={values.departamento}
                          >
                            <option value="0">
                              Selecciona tu departamento
                            </option>
                            {departments.map(({ departamento }) => {
                              return (
                                <option key={departamento} value={departamento}>
                                  {departamento}
                                </option>
                              );
                            })}
                          </Form.Select>
                          <ErrorMessage
                            name="departamento"
                            component="div"
                            className="invalid-feedback"
                          />
                        </>
                      ) : (
                        <SpanForm>{user.profileData.departamento}</SpanForm>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="align-items-start mb-2">
                  <Col className="col-6">
                    <Form.Group
                      className="d-flex justify-content-center align-items-center"
                      controlId="formBasicDocumentType"
                    >
                      <Form.Label className="w-50">
                        Tipo de documento:
                      </Form.Label>
                      {handelUpdate ? (
                        <>
                          <Form.Control
                            type="texto"
                            placeholder="ingrese su tipo de documento"
                            name="tipo_documento"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tipo_documento}
                            disabled
                            className={
                              touched.tipo_documento && errors.tipo_documento
                                ? 'is-invalid'
                                : ''
                            }
                          />
                          <ErrorMessage
                            name="tipo_documento"
                            component="div"
                            className="invalid-feedback"
                          />
                        </>
                      ) : (
                        <SpanForm>{user.profileData.tipo_documento}</SpanForm>
                      )}
                    </Form.Group>
                  </Col>
                  <Col className="col-6">
                    <Form.Group
                      className="d-flex justify-content-center align-items-center"
                      controlId="formBasicCity"
                    >
                      <Form.Label className="w-50">Ciudad:</Form.Label>
                      {handelUpdate ? (
                        <>
                          <Form.Select
                            name="ciudad"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ciudad}
                            disabled={city.length === 0}
                          >
                            <option value="0">Selecciona tu ciudad</option>
                            {city.map((ciudad) => {
                              return (
                                <option
                                  key={ciudad.municipio}
                                  value={ciudad.municipio}
                                >
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
                        </>
                      ) : (
                        <SpanForm>{user.profileData.ciudad}</SpanForm>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="align-items-start mb-2">
                  <Col className="col-6">
                    <Form.Group
                      className="d-flex justify-content-center align-items-center"
                      controlId="formBasicDocumentNumber"
                    >
                      <Form.Label className="w-50">
                        Número de documento:
                      </Form.Label>
                      {handelUpdate ? (
                        <>
                          <Form.Control
                            type="texto"
                            placeholder="Ingrese su número de documento"
                            name="numero_documento"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.numero_documento}
                            disabled
                            className={
                              touched.numero_documento &&
                              errors.numero_documento
                                ? 'is-invalid'
                                : ''
                            }
                          />
                          <ErrorMessage
                            name="numero_documento"
                            component="div"
                            className="invalid-feedback"
                          />
                        </>
                      ) : (
                        <SpanForm>{user.profileData.numero_documento}</SpanForm>
                      )}
                    </Form.Group>
                  </Col>
                  <Col className="col-6">
                    <Form.Group
                      className="d-flex justify-content-center align-items-center"
                      controlId="formBasicAddress"
                    >
                      <Form.Label className="w-50">Dirección:</Form.Label>
                      {handelUpdate ? (
                        <>
                          <Form.Control
                            type="texto"
                            placeholder="Ingrese su dirección"
                            name="direccion"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.direccion}
                            className={
                              touched.direccion && errors.direccion
                                ? 'is-invalid'
                                : ''
                            }
                          />
                          <ErrorMessage
                            name="direccion"
                            component="div"
                            className="invalid-feedback"
                          />
                        </>
                      ) : (
                        <SpanForm>{user.profileData.direccion}</SpanForm>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="align-items-start mb-2">
                  <Col className="col-6">
                    <Form.Group
                      className="d-flex justify-content-center align-items-center"
                      controlId="formBasicEmail"
                    >
                      <Form.Label className="w-50">
                        Correo Electrónico:
                      </Form.Label>
                      {handelUpdate ? (
                        <>
                          <Form.Control
                            type="email"
                            placeholder="Ingrese su correo"
                            name="correo"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.correo}
                            disabled
                            className={
                              touched.correo && errors.correo
                                ? 'is-invalid'
                                : ''
                            }
                          />
                          <ErrorMessage
                            name="correo"
                            component="div"
                            className="invalid-feedback"
                          />
                        </>
                      ) : (
                        <SpanForm>{user.profileData.correo}</SpanForm>
                      )}
                    </Form.Group>
                  </Col>
                  <Col className="col-6">
                    <Form.Group
                      className="d-flex justify-content-center align-items-center"
                      controlId="formBasicPhone"
                    >
                      <Form.Label className="w-50">Teléfono:</Form.Label>
                      {handelUpdate ? (
                        <>
                          <Form.Control
                            type="texto"
                            placeholder="Ingrese su número de teléfono"
                            name="telefono"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.telefono}
                            className={
                              touched.telefono && errors.telefono
                                ? 'is-invalid'
                                : ''
                            }
                          />
                          <ErrorMessage
                            name="telefono"
                            component="div"
                            className="invalid-feedback"
                          />
                        </>
                      ) : (
                        <SpanForm>{user.profileData.telefono}</SpanForm>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <div className="d-flex justify-content-center gap-5">
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
            </Row>
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
    </>
  );
};
