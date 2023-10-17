import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { BtnSubmitStyled } from "../../../../components/StyledButtons";
//import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { useUpdateProducto } from "../../../../domain/useUpdateProducto";
import { updateProduct } from "../../../../api/products";
import { Spinner } from "react-bootstrap";
import { set } from "date-fns";

function ModalProductState({
  showProcessingModal,
  setShowProcessingModal,
  productState,
  cargarProductos,
  setResetFilters,
}) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [errorPrisma, setErrorPrisma] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowProcessingModal(!showProcessingModal);
  };

  const handleConfirmation = async (e) => {
    e.preventDefault();
    await actualizarProducto(
      { estatus: productState.estatus ? false : true },
      productState.id
    );

    await cargarProductos();
    setResetFilters(true);
    // navigate("/profile/products");
    setShowProcessingModal(!showProcessingModal);
  };

  const actualizarProducto = async (formData, id) => {
    setLoading(true);
    setErrorPrisma("");
    try {
      const response = await updateProduct(formData, id);
      setData(response.data);
    } catch (error) {
      setErrorPrisma(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar estado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="login__logo d-flex justify-content-center">
            <img src="/../assets/logos/logo-icono.png" alt="logo" />
          </div>

          <Form>
            <Row>
              <Col className="d-flex  flex-column justify-content-center align-items-center gap-2">
                <div>
                  {productState.estatus
                    ? "Desea deshabilitar el producto ?"
                    : "Desea habilitar el producto ?"}
                </div>

                <BtnSubmitStyled width="100px" onClick={handleConfirmation}>
                  {loading && (
                    <Spinner
                      as="span"
                      animation="grow"
                      role="status"
                      aria-hidden="true"
                    />
                  )}
                  SI
                </BtnSubmitStyled>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <BtnSubmitStyled onClick={handleClose}>Salir</BtnSubmitStyled>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalProductState;
