import {
  SubTitleStyled,
  TextStyled,
} from '../components/home/ComponentsStyles';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BtnSubmitStyled } from '../../components/StyledButtons';
import { Formik, ErrorMessage } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { ToastContainer, toast } from 'react-toastify';
import { z } from 'zod';
import { sendQuestion } from '../../api/contact';

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

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const { name: nombre, email: correo, question: mensaje } = values;

    try {
      await sendQuestion({ nombre, correo, mensaje });
      toast.success('Se ha enviado su consulta satisfactoriamente!!', {
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
      toast.error('No pudimos procesar su solicitud, intentelo mas tarde', {
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

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
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
          resetForm,
        }) => (
          <div className="mt-4" style={{ minWidth: '700px' }}>
            <SubTitleStyled className="mb-5">CONTACTANOS</SubTitleStyled>
            <Row className="bg-light rounded p-5">
              <Col className="col-12 col-md-6 mb-5">
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
                      value={values.question}
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
                  <BtnSubmitStyled
                    type="submit"
                    disabled={isSubmitting}
                    onReset={resetForm}
                  >
                    Enviar
                  </BtnSubmitStyled>
                </Form>
              </Col>
              <Col className="col-12 col-md-6">
                <TextStyled>Encuéntranos</TextStyled>
                <Row className="d-flex">
                  <Col className="text-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18913.802088584853!2d-74.0955343109588!3d4.746218924708735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses-419!2sco!4v1687744931965!5m2!1ses-419!2sco"
                      width="250"
                      height="180"
                      style={{ border: 0 }}
                      loading="lazy"
                    ></iframe>
                  </Col>
                  <Col className="text-center">
                    <p>Dirección: Cll 16 #21-54</p>
                    <p>Ciudad: Bogotá, Colombia</p>
                    <p>Correo: info@thegarage.com</p>
                    <p>Celular: + 57 310 655 8974</p>
                    <p>Whatsapp: + 57 310 655 8974</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
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
    </>
  );
};
