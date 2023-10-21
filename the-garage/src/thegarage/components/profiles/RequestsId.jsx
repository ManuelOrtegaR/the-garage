/* eslint-disable react/jsx-no-target-blank */
import { useLocation, useNavigate } from 'react-router-dom';
import { useCompanyId } from '../../../domain/useCompanyId';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { format } from 'date-fns';
import { companyDecision } from '../../../api/admin';

export const RequestsId = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const idEmpresa = location.state;
  const { data, error, loading } = useCompanyId(idEmpresa);

  const onApprove = async () => {
    await companyDecision(idEmpresa, 'Activo');
    navigate('/profile/requests');
  };
  const onRejected = async () => {
    await companyDecision(idEmpresa, 'Rechazado');
    navigate('/profile/requests');
  };

  return (
    <>
      {data ? (
        <div className="w-100 m-3">
          <span className="fw-bold">
            Solicitud de {data.empresa.razon_social} con fecha de{' '}
            {format(new Date(data.fecha_creacion), 'dd/MM/yyyy HH:mm')}
          </span>
          <Container className="mt-3">
            <Row>
              <Col className="fw-bold">Tipo Documento Empresa</Col>
              <Col>NIT</Col>
              <Col className="fw-bold">Número</Col>
              <Col>{data.empresa.numero_documento_empresa}</Col>
            </Row>
            <Row>
              <Col className="fw-bold">Departamento</Col>
              <Col>{data.departamento}</Col>
              <Col className="fw-bold">Ciudad</Col>
              <Col>{data.ciudad}</Col>
            </Row>
            <Row>
              <Col className="fw-bold">Dirección</Col>
              <Col>{data.direccion}</Col>
              <Col className="fw-bold">Teléfono</Col>
              <Col>{data.empresa.telefono}</Col>
            </Row>
            <Row>
              <Col className="fw-bold">E-mail</Col>
              <Col>{data.correo}</Col>
              <Col className="fw-bold">Sitio Web</Col>
              <Col>
                <a href={data.empresa.sitio_web} target="_blank">
                  {data.empresa.sitio_web}
                </a>
              </Col>
            </Row>
            <Row>
              <Col className="fw-bold" sm={3}>
                Descripción
              </Col>
              <Col sm={9}>{data.empresa.descripcion}</Col>
            </Row>
            <span className="fw-bold">Información Representante Legal</span>
            <Row>
              <Col className="fw-bold">Tipo Documento</Col>
              <Col>{data.empresa.tipo_documento_representante}</Col>
              <Col className="fw-bold">Número</Col>
              <Col>{data.empresa.numero_documento_representante}</Col>
            </Row>
            <Row>
              <Col className="fw-bold">Nombre</Col>
              <Col>{data.empresa.representante_legal}</Col>
              <Col className="fw-bold">E-mail</Col>
              <Col>{data.empresa.correo_representante}</Col>
            </Row>
            <Row>
              <Col className="fw-bold" sm={3}>
                Cámara de comercio
              </Col>
              <Col sm={9}>
                <a href={data.empresa.camara_comercio} target="_blank">
                  Documento.pdf
                </a>
              </Col>
            </Row>
          </Container>
          <Button onClick={onApprove}>Aceptar</Button>
          <Button variant="danger" onClick={onRejected}>
            Rechazar
          </Button>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};
