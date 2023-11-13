/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

import { BtnSubmitStyled } from '../../../../components/StyledButtons';
import { updateProduct } from '../../../../api/products';

function ModalProductState({
  showProcessingModal,
  setShowProcessingModal,
  productState,
  cargarProductos,
  setResetFilters,
}) {
  const [show, setShow] = useState(true);
  const [data, setData] = useState(null);
  const [errorPrisma, setErrorPrisma] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowProcessingModal(!showProcessingModal);
  };

  const handleConfirmation = async (e) => {
    e.preventDefault();
    await actualizarProducto(
      { estatus: productState.estatus ? false : true },
      productState.id,
    );

    await cargarProductos();
    setResetFilters(true);
    setShowProcessingModal(!showProcessingModal);
  };

  const actualizarProducto = async (formData, id) => {
    setLoading(true);
    setErrorPrisma('');
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
          <Form>
            <Row>
              <Col className="d-flex  flex-column justify-content-center align-items-center gap-2">
                <div className="mb-3">
                  {productState.estatus
                    ? `Desea deshabilitar el producto ${productState.nombre} ?`
                    : `Desea habilitar el producto ${productState.nombre} ?`}
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
      </Modal>
    </>
  );
}

export default ModalProductState;
