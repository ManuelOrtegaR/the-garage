import { Formik, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BtnSubmitStyled } from "../../components/StyledButtons";

const nitRqd = z.number({
  required_error: "El NIT es requerido",
});

const nameRqd = z.string({
  required_error: "El nombre o razón social es requerido",
});

const addressRqd = z.string({
  required_error: "La dirección es requerida",
});

const cityRqd = z.string({
  required_error: "La ciudad es requerida",
});
const phoneRqd = z.number({
  required_error: "El teléfono o celular es requerido",
});

const webRqd = z.string().url().optional;

const ccomerceRqd = z.string({
  required_error: "La camara de comercio es requerida",
});

const imgRqd = z.string({
  required_error: "El logo o imagen coorporativa es requerida",
});

const emailRqd = z.string({
  required_error: "El correo es requerido",
});

const passwordRqd = z.string({
  required_error: "La contraseña es requerida",
});

const cpasswordRqd = z.string({
  required_error: "La confirmación de contraseña es requerida",
});

const companySignUpSchema = z
  .object({
    nit: nitRqd,
    name: nameRqd,
    address: addressRqd,
    city: cityRqd,
    phone: phoneRqd,
    website: webRqd,
    ccomerce: ccomerceRqd
      .refine((value) => !!value, {
        message: "Debe seleccionar un archivo",
        path: ["ccomerce"],
      })
      .refine(
        (value) => {
          const acceptedExtensions = ["pdf"]; // Extensiones permitidas
          const fileExtension = value
            .substring(value.lastIndexOf(".") + 1)
            .toLowerCase();
          return acceptedExtensions.includes(fileExtension);
        },
        { message: "Formato de archivo no válido", path: ["ccomerce"] }
      ),

    image: imgRqd
      .refine((value) => !!value, {
        message: "Debe seleccionar un archivo",
        path: ["image"],
      })
      .refine(
        (value) => {
          const acceptedExtensions = ["jpg", "jpeg", "png"]; // Extensiones permitidas
          const fileExtension = value
            .substring(value.lastIndexOf(".") + 1)
            .toLowerCase();
          return acceptedExtensions.includes(fileExtension);
        },
        { message: "Formato de archivo no válido", path: ["image"] }
      ),

    email: emailRqd.email("Dirección de correo incorrecto"),

    password: passwordRqd
      .min(6, "La contraseña debe tener mínimo 6 caracteres")
      .max(16, "La contraseña debe tener máximo 16 caracteres"),

    cpassword: cpasswordRqd
      .min(6, "La contraseña debe tener mínimo 6 caracteres")
      .max(16, "La contraseña debe tener máximo 16 caracteres"),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Las contraseñas no coinciden",
    path: ["cpassword"], // path of error
  });

//
function CompanySingUp() {
  const initialValues = {
    nit: "",
    name: "",
    address: "",
    city: "",
    phone: "",
    website: "",
    ccomerce: "",
    image: "",
    email: "",
    password: "",
    cpassword: "",
  };

  return (
    <>
      
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
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
        }) => (
          <Form className="Form_company m-5" onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formLInfo">
                  <Form.Label>NIT</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Ingrese el NIT de la empresa"
                    name="nit"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nit}
                    className={touched.nit && errors.nit ? "is-invalid" : ""}
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
                    className={touched.name && errors.name ? "is-invalid" : ""}
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
                  touched.address && errors.address ? "is-invalid" : ""
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
                <Form.Group className="mb-3" controlId="formContactCity">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    type="texto"
                    placeholder="Ingrese la ciudad de ubicación"
                    name="city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                    className={touched.city && errors.city ? "is-invalid" : ""}
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formContactPhone">
                  <Form.Label>Teléfono fijo/movil</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Ingrese su numero de teléfono"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    className={
                      touched.phone && errors.phone ? "is-invalid" : ""
                    }
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
              </Col>
            </Row>
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
                  touched.website && errors.website ? "is-invalid" : ""
                }
              />
              <ErrorMessage
                name="website"
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
                    placeholder="Seleccione un archivo"
                    name="ccomerce"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.ccomerce}
                    className={
                      touched.ccomerce && errors.ccomerce ? "is-invalid" : ""
                    }
                  />
                  <ErrorMessage
                    name="ccomerce"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formFileIMG" className="mb-3">
                  <Form.Label>Imagen o Logo</Form.Label>
                  <Form.Control
                    type="file"
                    size="sm"
                    placeholder="Seleccione un archivo"
                    name="image"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.image}
                    className={
                      touched.image && errors.image ? "is-invalid" : ""
                    }
                  />
                  <ErrorMessage
                    name="image"
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
                className={touched.email && errors.email ? "is-invalid" : ""}
              />
              <ErrorMessage
                name="email"
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
                      touched.password && errors.password ? "is-invalid" : ""
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
                      touched.cpassword && errors.cpassword ? "is-invalid" : ""
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
                Guardar
              </BtnSubmitStyled>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default CompanySingUp;
