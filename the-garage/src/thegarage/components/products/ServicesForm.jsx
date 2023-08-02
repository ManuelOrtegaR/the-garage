import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import { ButtonStyled } from "../../../auth/components/StyledsComponents";
import { FinishBtnStyle } from "../profiles/StylesComponentsProfiles";
import { Col, Row } from "react-bootstrap";

import { Formik, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";

const refRqd = z.string({
  required_error: "La referencia es requerido",
});

const serviceNameRqd = z.string({
  required_error: "El nombre del servicio es requerido",
});

const descripcionRqd = z.string({
  required_error: "La descripción del servicio es requerida",
});

const dataSheetRqd = z.string({
  required_error: "La Ficha técnica del servicio es requerida",
});

const priceRqd = z
  .number({
    required_error: "El precio es requerido",
  })
  .int({ message: "El precio debe ser un valor Entero" });

const ivaRqd = z
  .number({
    required_error: "El porcentaje de IVA es requerido",
  })
  .int({ message: "El porcentaje de IVA debe ser un valor Entero" });

const imageRqd = z.string({
  required_error: "La imagen del servicio es requerida",
});
/*
const checkFormat = (value) => {
  const acceptedExtensions = ["jpg", "jpeg", "png"]; // Extensiones permitidas
  const fileExtension = value
    .substring(value.lastIndexOf(".") + 1)
    .toLowerCase();
  return acceptedExtensions.includes(fileExtension);
};*/

const serviceSchema = z.object({
  ref: refRqd,
  serviceName: serviceNameRqd,
  descripcion: descripcionRqd,
  dataSheet: dataSheetRqd,
  iva: ivaRqd,
  price: priceRqd,
  image: imageRqd.refine((value) => !!value, {
    message: "Debe seleccionar un archivo",
    path: ["image"],
  }),
  /*  .refine((value) => !!checkFormat(value), {
      message: "Formato de archivo no válido",
      path: ["image"],
    })*/
});

export const ServicesForm = () => {
  const initialValues = {
    ref: "",
    serviceName: "",
    descripcion: "",
    dataSheet: "",
    iva: "",
    price: "",
    image: "",
  };

  return (
    <div className="singup w-100 m-auto ">
      <div className="singup__contenedor p-4 m-1 rounded-5 p-3 mb-2 bg-white text-dark">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fs-6 fw-bold">Nuevo Servicio </span>
          <FinishBtnStyle>Volver</FinishBtnStyle>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
          validationSchema={toFormikValidationSchema(serviceSchema)}
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
            <Form className="product_Form mt-4" onSubmit={handleSubmit}>
              <div className="d-flex justify-content-between align-items-center">
                <Form.Group
                  as={Row}
                  className="mb-3 w-50"
                  controlId="formBasicRef"
                >
                  <Form.Label column sm="2">
                    Referencia
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el código o Referencia del servicio"
                      name="ref"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={touched.ref && errors.ref ? "is-invalid" : ""}
                    />
                    <ErrorMessage
                      name="ref"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3 w-50"
                  controlId="formBasicName"
                >
                  <Form.Label column sm="4">
                    Nombre de Servicio
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el nombre del servicio"
                      name="serviceName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={
                        touched.serviceName && errors.serviceName
                          ? "is-invalid"
                          : ""
                      }
                    />
                    <ErrorMessage
                      name="serviceName"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Col>
                </Form.Group>
              </div>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formBasicDescription"
              >
                <Form.Label column sm="1">
                  Descripción
                </Form.Label>
                <Col>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Ingrese la descripción del servicio"
                    name="descripcion"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={
                      touched.descripcion && errors.descripcion
                        ? "is-invalid"
                        : ""
                    }
                  />

                  <ErrorMessage
                    name="descripcion"
                    component="div"
                    className="invalid-feedback"
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formBasicDescription"
              >
                <Form.Label column sm="1">
                  Ficha tecnica
                </Form.Label>
                <Col>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Ingrese la ficha tecnica del servicio"
                    name="dataSheet"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={
                      touched.dataSheet && errors.dataSheet ? "is-invalid" : ""
                    }
                  />
                  <ErrorMessage
                    name="dataSheet"
                    component="div"
                    className="invalid-feedback"
                  />
                </Col>
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <Form.Group as={Row} controlId="formBasicPrice">
                  <Form.Label column sm="3">
                    Precio
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="number"
                      placeholder="Ingrese el precio del servicio sin IVA"
                      name="price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={
                        touched.price && errors.price ? "is-invalid" : ""
                      }
                    />
                    <ErrorMessage
                      name="price"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formBasicTax">
                  <Form.Label column sm="3">
                    IVA %{" "}
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="number"
                      placeholder="Ingrese el porcetaje de IVA"
                      name="iva"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={touched.iva && errors.iva ? "is-invalid" : ""}
                    />
                    <ErrorMessage
                      name="iva"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="align-items-center"
                  controlId="formBasicAvailability"
                >
                  <Form.Label column sm="4 me-5">
                    Disponibilidad
                  </Form.Label>
                  <Col>
                    <div>
                      <Form.Check // prettier-ignore
                        type="checkbox"
                        id="ch_tienda"
                        label="En tienda sin cita"
                      />
                      <Form.Check // prettier-ignore
                        type="checkbox"
                        id="ch_tienda"
                        label="En tienda con cita"
                      />

                      <Form.Check // prettier-ignore
                        type="checkbox"
                        id="ch_domicilio"
                        label="Domicilio"
                      />
                    </div>
                  </Col>
                </Form.Group>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <Form.Group
                  as={Row}
                  className=" align-items-center me-5"
                  controlId="formFileIMG"
                >
                  <Form.Label column sm="4">
                    Imagen del servicio
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="file"
                      size="sm"
                      name="image"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={
                        touched.image && errors.image ? "is-invalid" : ""
                      }
                    />
                    <ErrorMessage
                      name="image"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Col>
                </Form.Group>

                <ButtonStyled
                  className="text-center fs-5 align-items-center"
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  style={{ height: 30 }}
                >
                  Guardar
                </ButtonStyled>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
