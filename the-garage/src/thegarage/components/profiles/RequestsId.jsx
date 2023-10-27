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
        <div className="w-75 m-auto mt-3">
          <div className="fw-bold">
            Solicitud de {data.empresa.razon_social}
          </div>
          <div>
            con fecha de{' '}
            {format(new Date(data.fecha_creacion), 'dd/MM/yyyy HH:mm')}
          </div>
          <Container className="mt-3">
            <Row>
              <Col className="fw-bold col-6 col-md-3">
                Tipo Documento Empresa
              </Col>
              <Col className="col-6 col-md-3">NIT</Col>
              <Col className="fw-bold col-6 col-md-3">Número</Col>
              <Col className="col-6 col-md-3">
                {data.empresa.numero_documento_empresa}
              </Col>
            </Row>
            <Row>
              <Col className="fw-bold col-6 col-md-3">Departamento</Col>
              <Col className="col-6 col-md-3">{data.departamento}</Col>
              <Col className="fw-bold col-6 col-md-3">Ciudad</Col>
              <Col className="col-6 col-md-3">{data.ciudad}</Col>
            </Row>
            <Row>
              <Col className="fw-bold col-6 col-md-3">Dirección</Col>
              <Col className="col-6 col-md-3">{data.direccion}</Col>
              <Col className="fw-bold col-6 col-md-3">Teléfono</Col>
              <Col className="col-6 col-md-3">{data.empresa.telefono}</Col>
            </Row>
            <Row>
              <Col className="fw-bold col-6 col-md-3">E-mail</Col>
              <Col className="col-6 col-md-3">{data.correo}</Col>
              <Col className="fw-bold col-6 col-md-3">Sitio Web</Col>
              <Col className="col-6 col-md-3">
                <a href={data.empresa.sitio_web} target="_blank">
                  {data.empresa.sitio_web}
                </a>
              </Col>
            </Row>
            <Row>
              <Col className="fw-bold col-6 col-md-3">Descripción</Col>
              <Col className="col-6 col-md-3">{data.empresa.descripcion}</Col>
            </Row>
            <div className="fw-bold my-3">Información Representante Legal</div>
            <Row>
              <Col className="fw-bold col-6 col-md-3">Tipo Documento</Col>
              <Col className="col-6 col-md-3">
                {data.empresa.tipo_documento_representante}
              </Col>
              <Col className="fw-bold col-6 col-md-3">Número</Col>
              <Col className="col-6 col-md-3">
                {data.empresa.numero_documento_representante}
              </Col>
            </Row>
            <Row>
              <Col className="fw-bold col-6 col-md-3">Nombre</Col>
              <Col className="col-6 col-md-3">
                {data.empresa.representante_legal}
              </Col>
              <Col className="fw-bold col-6 col-md-3">E-mail</Col>
              <Col className="col-6 col-md-3">
                {data.empresa.correo_representante}
              </Col>
            </Row>
            <Row>
              <Col className="fw-bold col-6 col-md-3" sm={3}>
                Cámara de comercio
              </Col>
              <Col className="col-6 col-md-3">
                <a href={data.empresa.camara_comercio} target="_blank">
                  Documento.pdf
                </a>
              </Col>
            </Row>
            <div className="mt-3 d-flex justify-content-center gap-5">
              <Button className="bg-main-color" onClick={onApprove}>
                Aceptar
              </Button>
              <Button variant="danger" onClick={onRejected}>
                Rechazar
              </Button>
            </div>
          </Container>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};
