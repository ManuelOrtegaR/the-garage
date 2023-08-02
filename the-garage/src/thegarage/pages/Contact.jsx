import {
  SubTitleStyled,
  TextStyled,
} from '../components/home/ComponentsStyles';
import Form from 'react-bootstrap/Form';
import { BtnSubmitStyled } from '../../components/StyledButtons';
import { Formik, ErrorMessage } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { z } from 'zod';

const nameRqd = z.string({
  required_error: 'El nombre es requerido',
});

const emailRqd = z.string({
  required_error: 'El email es requerido',
});

const questionRqd = z.string({
  required_error: 'La pregunta o tema a consultar es requerida',
});

const pqrSchema = z.object({
  name: nameRqd,
  email: emailRqd,
  question: questionRqd,
});

export const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    question: '',
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
        validationSchema={toFormikValidationSchema(pqrSchema)}
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
          <div className="mt-4">
            <SubTitleStyled>CONTACTANOS</SubTitleStyled>
            <div className="row bg-light m-4 p-3 rounded">
              <div className="col-6 d-flex flex-column">
                <TextStyled>Envíanos tus datos</TextStyled>

                <Form className="Contact_Form mt-4" onSubmit={handleSubmit}>
                  <Form.Group className="mb-2">
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su nombre"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={
                        touched.name && errors.name ? 'is-invalid' : ''
                      }
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Control
                      type="email"
                      placeholder="example@example.com"
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
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Control
                      as="textarea"
                      placeholder="Escriba el detalle de su consulta"
                      name="question"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={
                        touched.question && errors.question ? 'is-invalid' : ''
                      }
                    />
                    <ErrorMessage
                      name="question"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Form.Group>

                  <Form.Label className="text-secondary">
                    Nosotros no compartiremos sus datos con nadie
                  </Form.Label>
                  <BtnSubmitStyled disabled={isSubmitting}>
                    Enviar
                  </BtnSubmitStyled>
                </Form>
              </div>
              <div className="col-6 d-flex flex-column">
                <TextStyled>Encuentranos</TextStyled>
                <div className="row align-items-center">
                  <div className="col-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18913.802088584853!2d-74.0955343109588!3d4.746218924708735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses-419!2sco!4v1687744931965!5m2!1ses-419!2sco"
                      width="300"
                      height="200"
                      style={{ border: 0 }}
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="col-6">
                    <p>Dirección: Cll 16 #21-54</p>
                    <p>Ciudad: Bogotá, Colombia</p>
                    <p>Correo: info@thegarage.com</p>
                    <p>Celular: + 57 310 655 8974</p>
                    <p>Whatsapp: + 57 310 655 8974</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};
