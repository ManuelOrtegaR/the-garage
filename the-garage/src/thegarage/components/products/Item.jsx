import { useNavigate } from "react-router-dom";
import {
  AlertStyled,
  AlertWarningStyled,
  CardAvalaibleStyle,
  CardDescroptionStyle,
  CardImgStyle,
  CardStyle,
  CardTitleStyle,
  ContainerButtonStyled,
  ContainerStyled,
  IconStyled,
} from "./StyledsComponentsProducts";
import { BtnDangerSubmitStyled, BtnSubmitStyled } from "../../../components";
import { Card } from "react-bootstrap";
import { useState, useContext } from "react";
import { AuthContext } from "../../../auth/context/AuthContext";
import { promedioValoraciones } from "./utils";

export function Item({ item, isService }) {
  const [showAlert, setShowAlert] = useState(false);
  const { user, addCarElement } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleClick(id) {
    if (user) {
      isService
        ? navigate(`/servicesDetail/${id}`)
        : navigate(`/productDetail/${id}`);
    } else navigate("/login");
  }

  function handleClickSuceess(item, cant) {
    if (user) {
      addCarElement(item, cant);
      setShowAlert(!showAlert);
    } else navigate("/login");
  }

  return (
    <ContainerStyled>
      <CardStyle>
        <CardImgStyle
          variant="top"
          src={
            item.fotos.length > 0
              ? item.fotos[0].url_foto
              : "https://placehold.co/600x400"
          }
        />
        <Card.Body>
          <CardTitleStyle>{item.nombre}</CardTitleStyle>
          <CardDescroptionStyle>{item.descripcion}</CardDescroptionStyle>
          <Card.Text className="fs-4">
            <strong>${item.precio.toLocaleString("es-CO")}</strong>
          </Card.Text>
          <CardAvalaibleStyle>
            {item.tipo_entrega.toLowerCase().includes("domi") ? (
              <i className="bi bi-check"></i>
            ) : (
              <i className="bi bi-x"></i>
            )}
            {isService ? "Servicio a domicilio" : "Disponible para despacho"}
          </CardAvalaibleStyle>
          <CardAvalaibleStyle>
            {item.tipo_entrega.toLowerCase().includes("retiro") ? (
              <i className="bi bi-check"></i>
            ) : (
              <i className="bi bi-x"></i>
            )}
            {isService ? "Servicio en Taller" : "Disponible para Retiro"}
          </CardAvalaibleStyle>
          <Card.Text>
            {[...Array(promedioValoraciones(item.valoraciones))].map(
              (_, index) => (
                <IconStyled
                  key={index}
                  className="bi bi-star-fill"
                ></IconStyled>
              )
            )}
            {[...Array(5 - promedioValoraciones(item.valoraciones))].map(
              (_, index) => (
                <IconStyled key={index} className="bi bi-star"></IconStyled>
              )
            )}

            <span> {promedioValoraciones(item.valoraciones)} </span>
          </Card.Text>
          {!user || user.userClass === "Cliente" ? (
            <ContainerButtonStyled>
              <BtnSubmitStyled
                onClick={(event) => {
                  handleClickSuceess(item, 1);
                }}
                variant="success"
              >
                {isService ? "Solicitar Servicio" : "Agregar al carrito"}
              </BtnSubmitStyled>

              {showAlert && (
                <AlertStyled
                  variant="primary"
                  onClose={() => {
                    setShowAlert(!showAlert);
                  }}
                  dismissible
                >
                  {isService ? "Servicio Solicitado" : "Producto Agregado"}
                </AlertStyled>
              )}

              <BtnDangerSubmitStyled
                onClick={() => {
                  handleClick(item.id);
                }}
                variant="danger"
                className="px-1 w-100"
              >
                Ver Detalles
              </BtnDangerSubmitStyled>
            </ContainerButtonStyled>
          ) : (
            <div>
              <AlertWarningStyled variant="warning">
                <p>
                  Este servicio o producto está disponible solo para clientes.{" "}
                </p>
              </AlertWarningStyled>
            </div>
          )}
        </Card.Body>
      </CardStyle>
    </ContainerStyled>
  );
}
