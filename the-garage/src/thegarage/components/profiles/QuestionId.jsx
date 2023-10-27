/* eslint-disable react/jsx-no-target-blank */
import { useLocation, useNavigate } from 'react-router-dom';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { format } from 'date-fns';
import { useQuestion } from '../../../domain/useQuestion';
import { sendResponse } from '../../../api/contact';

export const QuestionId = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state;
  const { data, error, isLoading } = useQuestion({ id });

  const onResponse = async () => {
    const respuesta = document.querySelector('textarea').value;
    if (!respuesta) return alert('Por favor, ingrese una respuesta');
    if (respuesta.length > 500)
      return alert('La respuesta no puede superar los 500 caracteres');

    try {
      await sendResponse({ id, respuesta });
      navigate('/profile/questions');
    } catch (error) {
      navigate('/profile/questions');
    } finally {
      document.querySelector('textarea').value = '';
    }
  };

  return (
    <>
      {error && (
        <Alert
          variant="danger"
          style={{ width: '75%', margin: 'auto', marginTop: '10px' }}
        >
          No se pudo cargar la lista de consultas, por favor actualice la página
        </Alert>
      )}
      {isLoading && <div>Cargando...</div>}
      {data && !error && !isLoading && (
        <div className="w-75 m-auto">
          <div className="fw-bold">Consulta de {data.nombre_contacto}</div>
          <div>
            con fecha de{' '}
            {format(new Date(data.fecha_consulta), 'dd/MM/yyyy HH:mm')}
          </div>
          <Container className="mt-3 d-flex">
            <Col>
              <Row className="fw-bold">Nombre de contacto:</Row>
              <Row>{data.nombre_contacto}</Row>
              <Row className="fw-bold">Detalles de consulta:</Row>
              <Row>{data.consulta}</Row>
            </Col>
            <Col hidden={data.respuesta}>
              <Row className="fw-bold">Responder mensaje</Row>
              <Row>
                <Form.Control as="textarea" rows={5} name="respuesta" />
              </Row>
            </Col>
          </Container>
          <Button
            className="bg-main-color"
            onClick={onResponse}
            hidden={data.respuesta}
          >
            Responder
          </Button>
        </div>
      )}
    </>
  );
};
