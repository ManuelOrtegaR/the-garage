/* eslint-disable react/prop-types */
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { z } from 'zod';
import { NavLinkProfile, SpanForm } from './StylesComponentsProfiles';
import { Formik, ErrorMessage } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { BtnSubmitStyled } from '../../../components';
import { getSession } from '../../../api/session';
import { updateAdminProfile } from '../../../api/profile';
import { useRef } from 'react';

export const AdminProfile = ({
  user,
  login,
  handelUpdate,
  setHandelUpdate,
  departments,
  city,
  handleChangeDepartment,
}) => {
  const updateAdminSchema = z.object({
    direccion: z.string().min(3, 'Mínimo 3 caracteres'),
    departamento: z.string().min(3, 'Mínimo 3 caracteres'),
    ciudad: z.string().min(3, 'Mínimo 3 caracteres'),
    correo: z.string().min(3, 'Mínimo 3 caracteres'),
  });

  const initialValues = {
    direccion: user.profileData.direccion,
    departamento: user.profileData.departamento,
    ciudad: user.profileData.ciudad,
    correo: user.profileData.correo,
  };

  const fileInputRef = useRef(null);

  const changeImageInput = () => {
    fileInputRef.current.click();
  };

  const onSubmit = async (values, { setSubmitting }) => {
    const response = await updateAdminProfile(values);
    const token = getSession();
    const { correo: name } = response.user;
    const type = response.user.tipo_usuario;
    const profileData = {
      ...response.user,
    };
    login(name, type, token, profileData);
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={toFormikValidationSchema(updateAdminSchema)}
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
          <Form
            className="Form_client m-4 d-flex w-100"
            onSubmit={handleSubmit}
          >
            <div className="d-flex col-2 align-items-center">
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
                  <Image
                    src="../../../../assets/images/home/tecnologiesIcons/editImage.svg"
                    style={{ height: 25, width: 25 }}
                  />
                </NavLinkProfile>
              </div>
            </div>
            <div className="col-10">
              <Row className="align-items-center mb-2">
                <Col>
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
                            touched.correo && errors.correo ? 'is-invalid' : ''
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
                <Col>
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
              <Row className="align-items-center mb-2">
                <Col>
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
                <Col>
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
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
