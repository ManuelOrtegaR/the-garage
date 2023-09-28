import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import { ButtonStyled } from "../../../auth/components/StyledsComponents";
import { FinishBtnStyle } from "../profiles/StylesComponentsProfiles";
import { Alert, Col, Row } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import { createProduct } from "../../../api/products";
import { formatError } from "./utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const imageRqd = z.any({
  required_error: "La imagen del producto es requerida",
});
const marcarqd = z.string({
  required_error: "La marca del producto es requerida.",
});

const tipo_entregaRqd = z.string({
  required_error: "El tipo de Entrega es requerido",
});

const productSchema = z.object({
  nombre_categoria: refRqd,
  nombre: productNameRqd,
  descripcion: descripcionRqd,
  ficha_tecnica: dataSheetRqd,
  iva: ivaRqd,
  precio: priceRqd,
  cantidad_disponible: unidadesRqd,
  images: imageRqd,
  marca: marcarqd,
  tipo_entrega: tipo_entregaRqd,
});

export const ProductsForm = () => {
  const initialValues = {
    nombre_categoria: "",
    nombre: "",
    descripcion: "",
    ficha_tecnica: "",
    iva: "",
    precio: "",
    cantidad_disponible: "",
    images: [],
    marca: "",
    tipo_entrega: "",
  };
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <div className="singup w-100 m-auto ">
      <div className="singup__contenedor p-4 m-1 rounded-5 p-3 mb-2 bg-white text-dark">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fs-6 fw-bold">Nuevo Producto </span>
          {error && <Alert variant="danger">{error}</Alert>}
          <FinishBtnStyle>Volver</FinishBtnStyle>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const formData = new FormData();

              formData.append("nombre_categoria", values.nombre_categoria);
              formData.append("nombre", values.nombre);
              formData.append("descripcion", values.descripcion);
              formData.append("ficha_tecnica", values.ficha_tecnica);
              formData.append("impuestos", values.iva);
              formData.append("precio", values.precio);
              formData.append(
                "cantidad_disponible",
                values.cantidad_disponible
              );
              formData.append("images", values.images);
              formData.append(
                "id_empresa",
                "40b0ea74-25e6-4566-8017-49a591c5b843"
              );
              formData.append("tipo_entrega", values.tipo_entrega);
              formData.append("marca", values.marca);
              formData.append("estatus", "true");

              values.images.forEach((file, index) => {
                formData.append(`images`, file);
              });

              const { data } = await createProduct(formData);

              // setUser(data);
              setSubmitting(false);
              navigate(`/productDetail/${data.id}`);
            } catch (e) {
              const message = formatError(e);
              setError(message);
            }
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
            setFieldValue,
          }) => (
            <Form className="product_Form mt-4" onSubmit={handleSubmit}>
              <div className="d-flex justify-content-between align-items-center">
                <Form.Group
                  as={Row}
                  className="mb-3 w-50"
                  controlId="formBasicProdRef"
                >
                  <Form.Label column sm="2">
                    Nombre de Categoria
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el código o Referencia del producto"
                      name="nombre_categoria"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nombre_categoria}
                      className={
                        touched.nombre_categoria && errors.nombre_categoria
                          ? "is-invalid"
                          : ""
                      }
                    />
                    <ErrorMessage
                      name="nombre_categoria"
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
                      name="nombre"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nombre}
                      className={
                        touched.nombre && errors.nombre ? "is-invalid" : ""
                      }
                    />
                    <ErrorMessage
                      name="nombre"
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
                    value={values.descripcion}
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
                controlId="formBasicProdMarca"
              >
                <Form.Label column sm="1">
                  Marca
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    rows={2}
                    placeholder="Ingrese la Marca del producto"
                    name="marca"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.marca}
                    className={
                      touched.marca && errors.marca ? "is-invalid" : ""
                    }
                  />

                  <ErrorMessage
                    name="marca"
                    component="div"
                    className="invalid-feedback"
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formBasicProdEntrega"
              >
                <Form.Label column sm="1">
                  Tipo de Entrega
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    rows={2}
                    placeholder="Ingrese el tipo de Entrega del producto"
                    name="tipo_entrega"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tipo_entrega}
                    className={
                      touched.tipo_entrega && errors.tipo_entrega
                        ? "is-invalid"
                        : ""
                    }
                  />

                  <ErrorMessage
                    name="tipo_entrega"
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
                    name="ficha_tecnica"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.ficha_tecnica}
                    className={
                      touched.ficha_tecnica && errors.ficha_tecnica
                        ? "is-invalid"
                        : ""
                    }
                  />
                  <ErrorMessage
                    name="ficha_tecnica"
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
                      name="precio"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.precio}
                      className={
                        touched.precio && errors.precio ? "is-invalid" : ""
                      }
                    />
                    <ErrorMessage
                      name="precio"
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
                      value={values.iva}
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
                      name="cantidad_disponible"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.cantidad_disponible}
                      className={
                        touched.cantidad_disponible &&
                        errors.cantidad_disponible
                          ? "is-invalid"
                          : ""
                      }
                    />
                    <ErrorMessage
                      name="cantidad_disponible"
                      component="div"
                      className="invalid-feedback"
                    />
                  </Col>
                </Form.Group>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                {/* <Form.Group
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
                </Form.Group> */}
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
                      multiple
                      size="sm"
                      name="images"
                      onChange={(e) => {
                        // const file = e.currentTarget.files[0];
                        const file = Array.from(e.currentTarget.files);
                        setFieldValue("images", file);
                      }}
                      //onBlur={handleBlur}
                      // value={values.name}
                      className={
                        touched.images && errors.images ? "is-invalid" : ""
                      }
                    />
                    <ErrorMessage
                      name="images"
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
