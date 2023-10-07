/* eslint-disable react/prop-types */
import { Form, Modal } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { BtnSubmitStyled } from '../../../../components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StarRating } from '../../home';
import { createRating } from '../../../../api/rating';
import { useState } from 'react';

export function ModalScore(props) {
  const [items, setItems] = useState(props.items);
  const ratingMsg = (event) => {
    event.preventDefault();
    toast.success('Se a actualizado exitosamente!!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const onRating = async (event, id, index) => {
    event.preventDefault();
    const calificacion = getButtonValues(event.target);
    const comentarios = event.target[5].value;
    const { status } = await createRating(id, {
      calificacion,
      comentarios,
    });
    if (status === 201) {
      const newItems = [...items];
      newItems[index].calificacion = calificacion;
      newItems[index].comentarios = comentarios;
      setItems(newItems);
    }
  };

  const getButtonValues = (target) => {
    const buttonValues = [];
    for (let i = 0; i < 5; i++) {
      if (target[i].type === 'button') {
        buttonValues.push(target[i].classList.contains('on'));
      }
    }
    return buttonValues.filter((value) => value).length;
  };

  return (
    <Modal {...props} className="text-main-color" size="xl" centered>
      <Modal.Header className="bg-secondary-subtle" closeButton>
        <Modal.Title className="fw-bold">Calificación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {items.map((item, index) => (
          <Form
            key={item.id_producto}
            name="ratings"
            onSubmit={(event) => {
              onRating(event, item.id_producto, index);
            }}
          >
            <Form.Group
              className="mb-3 align-items-center justify-content-center row"
              controlId="exampleForm.ControlInput1"
            >
              <Image
                src={item.fotos[0].url_foto}
                rounded
                style={{ width: '40px', height: '40px', padding: '0px' }}
              />
              <Form.Label className="col-5">{item.nombre}</Form.Label>
              {!item.calificacion ? (
                <>
                  <StarRating className="col-2" name={item.nombre} />
                  <Form.Control
                    className="col-4"
                    as="textarea"
                    rows={1}
                    style={{ width: 'auto' }}
                  />
                  <BtnSubmitStyled className="col-1 mx-4" type="submit">
                    Califica
                  </BtnSubmitStyled>
                </>
              ) : (
                <>
                  <StarRating
                    className="col-2"
                    name={item.nombre}
                    itemRating={item.calificacion}
                  />
                  <Form.Control
                    className="col-4"
                    as="textarea"
                    rows={1}
                    style={{ width: 'auto' }}
                    value={item.comentarios}
                  />
                </>
              )}
            </Form.Group>
          </Form>
        ))}
      </Modal.Body>
      <Modal.Footer className="bg-secondary-subtle gap-5">
        <BtnSubmitStyled onClick={props.onHide}>Volver</BtnSubmitStyled>
      </Modal.Footer>
    </Modal>
  );
}
