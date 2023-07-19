import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import VerifyAccountModal from "../components/VerifyAccountModal";
import { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";

import { BtnSubmitStyled } from "../../components/StyledButtons";

const nameRqd = z.string({
  required_error: "El nombre es requerido",
});

const usernameRqd = z.string({
  required_error: "El nombre de usuario es requerido",
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

const clientSignUpSchema = z
  .object({
    name: nameRqd,
    username: usernameRqd,
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

// .refine(
//   (data) => data.cpassword === data.password,
//   (data) => ({ message: `No paila, ${data.password}, ${data.cpassword}` })
// );

function ClientSingUp() {
  const [verifyAccount, setVerifyAccount] = useState(false);
  const handleShowVerifyModal = () => setVerifyAccount(true);

  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
  };

  return (
    <>
      <h1 className="fs-4 my-2 fw-bolder">Sign Up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
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
        }) => (
          <Form className="Form_client m-5" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="texto"
                placeholder="Ingrese su nombre completo"
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
            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control
                type="texto"
                placeholder="Ingrese su nombre de Usuario"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                className={
                  touched.username && errors.username ? "is-invalid" : ""
                }
              />
              <ErrorMessage
                name="username"
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
                className={touched.email && errors.email ? "is-invalid" : ""}
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
                  touched.password && errors.password ? "is-invalid" : ""
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
                  touched.cpassword && errors.cpassword ? "is-invalid" : ""
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
                type="button"
                onClick={handleShowVerifyModal}
                disabled={isSubmitting}
              >
                Guardar
              </BtnSubmitStyled>
            </div>
          </Form>
        )}
      </Formik>
      {verifyAccount && <VerifyAccountModal />}
    </>
  );
}
export default ClientSingUp;
