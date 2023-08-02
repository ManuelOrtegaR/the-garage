import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import { ButtonStyled } from "../../../auth/components/StyledsComponents";
import { FinishBtnStyle } from "../profiles/StylesComponentsProfiles";
import { Col, Row } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";

const refRqd = z.string({
  required_error: "La referencia es requerida",
});

const productNameRqd = z.string({
  required_error: "El nombre es requerido",
});

const descripcionRqd = z.string({
  required_error: "La descripción es requerida",
});

const dataSheetRqd = z.string({
  required_error: "La Ficha técnica es requerida",
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
const unidadesRqd = z
  .number({
    required_error: "Las unidades diponibles son requeridas",
  })
  .int({ message: "Las unidades diponibles deben ser un valor entero" });

const imageRqd = z.string({
  required_error: "La imagen del producto es requerida",
});

const productSchema = z.object({
  ref: refRqd,
  productName: productNameRqd,
  descripcion: descripcionRqd,
  dataSheet: dataSheetRqd,
  iva: ivaRqd,
  price: priceRqd,
  units: unidadesRqd,
  image: imageRqd.refine((value) => !!value, {
    message: "Debe seleccionar un archivo",
    path: ["image"],
  }),
});

export const ProductsForm = () => {
  const initialValues = {
    ref: "",
    productName: "",
    descripcion: "",
    dataSheet: "",
    iva: "",
    price: "",
    units: "",
    image: "",
  };

  return (
    <div className="singup w-100 m-auto ">
      <div className="singup__contenedor p-4 m-1 rounded-5 p-3 mb-2 bg-white text-dark">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fs-6 fw-bold">Nuevo Producto </span>
          <FinishBtnStyle>Volver</FinishBtnStyle>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
          validationSchema={toFormikValidationSchema(productSchema)}
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
            <Form className="product_Form mt-4">
              <div className="d-flex justify-content-between align-items-center">
                <Form.Group
                  as={Row}
                  className="mb-3 w-50"
                  controlId="formBasicProdRef"
                >
                  <Form.Label column sm="2">
                    Referencia
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el código o Referencia del producto"
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
                  controlId="formBasicProdName"
                >
                  <Form.Label column sm="4">
                    Nombre de Producto
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el nombre del producto"
                      name="productName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={
                        touched.productName && errors.productName
                          ? "is-invalid"
                          : ""
                      }
                    />
                    <ErrorMessage
                      name="productName"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Col>
                </Form.Group>
              </div>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formBasicProdDescription"
              >
                <Form.Label column sm="1">
                  Descripción
                </Form.Label>
                <Col>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Ingrese la descripción del producto"
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
                controlId="formBasicProdDescription"
              >
                <Form.Label column sm="1">
                  Ficha tecnica:
                </Form.Label>
                <Col>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Ingrese la dicha tecnica del producto"
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

              <div className="d-flex justify-content-around align-items-center">
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formBasicProdPrice"
                >
                  <Form.Label column sm="4">
                    Precio COP
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="number"
                      placeholder="Ingrese el precio del producto sin IVA"
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
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formBasicProdTax"
                >
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
                  className="mb-3"
                  controlId="formBasicProdUnits"
                >
                  <Form.Label column sm="3">
                    Unidades Disponibles{" "}
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="number"
                      placeholder="Ingrese las unidades disponibles"
                      name="units"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={
                        touched.units && errors.units ? "is-invalid" : ""
                      }
                    />
                    <ErrorMessage
                      name="units"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Col>
                </Form.Group>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Form.Group
                  as={Row}
                  className="align-items-center"
                  controlId="formBasicProdAvailability"
                >
                  <Form.Label column sm="4">
                    Tipo de Despacho
                  </Form.Label>
                  <Col>
                    <div>
                      <Form.Check // prettier-ignore
                        type="checkbox"
                        id="ch_tienda"
                        label="recoger en tienda"
                      />

                      <Form.Check // prettier-ignore
                        type="checkbox"
                        id="ch_domicilio"
                        label="envío domicilio"
                      />
                    </div>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="align-items-center"
                  controlId="formProdFileIMG"
                >
                  <Form.Label column sm="3">
                    Imagen del producto
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
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
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
