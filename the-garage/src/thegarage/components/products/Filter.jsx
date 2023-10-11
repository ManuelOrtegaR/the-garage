import { Accordion, Badge, Form, ListGroup } from "react-bootstrap";
import {
  AccordionStyle,
  Badgestyled,
  H4Styled,
} from "./StyledsComponentsProducts";
import {
  generarQueryFiltros,
  generarRangos,
  medianaValoraciones,
  promedioValoraciones,
} from "./utils";
import { useNavigate } from "react-router-dom";

export function Filter({
  data,
  addFilter,
  deleteFilter,
  checkFilter,
  setCheckFilter,
  filtrosSeleccionadosAgrupados,
  setFiltrosSeleccionadosAgrupados,
}) {
  const navigate = useNavigate();
  const handlerChange = (event, type) => {
    let label = event.target.labels[0].innerText;
    if (label.startsWith("$")) {
      label = label.replace(/[$.]/g, "");

      label = label.replace(/\s/g, "");

      label = label.replace(/-/g, ",");
    }
    if (event.target.checked) {
      addFilter(label);
      setFiltrosSeleccionadosAgrupados({
        ...filtrosSeleccionadosAgrupados,
        [type]:
          label +
          (filtrosSeleccionadosAgrupados[type]
            ? "-" + filtrosSeleccionadosAgrupados[type]
            : ""),
      });
    } else {
      deleteFilter(label);
      let filtrosSeleccionadosAgrupadosAux = filtrosSeleccionadosAgrupados;
      let filtrosSeleccionadosAgrupadosAux2 =
        filtrosSeleccionadosAgrupadosAux[type].split("-");
      filtrosSeleccionadosAgrupadosAux2 =
        filtrosSeleccionadosAgrupadosAux2.filter((filt) => filt !== label);
      filtrosSeleccionadosAgrupadosAux[type] =
        filtrosSeleccionadosAgrupadosAux2.join("-");
      setFiltrosSeleccionadosAgrupados(filtrosSeleccionadosAgrupadosAux);
    }
    // const query = generarQueryFiltros(filtrosSeleccionadosAgrupados);

    // navigate(`/productos?${query}`);

    setCheckFilter({ ...checkFilter, [label]: !checkFilter[label] });
  };

  const generateFilter = (dataFilter, type) => {
    let elements = [];
    let uniqueElements = [];
    elements = dataFilter.map((element) => {
      return type === "category"
        ? element.categoria.nombre_categoria
        : type === "price"
        ? element.precio
        : type === "brand"
        ? element.marca
        : type === "rating"
        ? medianaValoraciones(element.valoraciones)
        : type === "store"
        ? element.empresa.razon_social
        : null;
    });

    uniqueElements = elements.filter(
      (element, i) => elements.indexOf(element) === i
    );
    uniqueElements.sort((a, b) => a - b);

    // Para quitar del filtro lo que no tenga valoraciones
    if (type === "rating") {
      uniqueElements = uniqueElements.filter((element) => element !== 0);
    }

    if (type === "price") {
      uniqueElements = generarRangos(uniqueElements);
    }

    const countFilter = (filt) => {
      let count = 0;
      elements.map((element) => {
        if (element === filt) {
          count++;
        }
      });
      return count;
    };

    // contador de cuantas veces esta ese dato dentro de un vector con un rango inicial y final

    const countFilterPrice = (filt) => {
      let count = 0;
      elements.map((element) => {
        if (element >= filt[0] && element <= filt[1]) {
          count++;
        }
      });
      return count;
    };

    return uniqueElements.map((filt, index) => (
      <div key={index} className="d-flex justify-content-between pb-2 pe-3">
        <Form.Check
          type="checkbox"
          id={`flexCheckChecked${filt}`}
          label={
            type === "price"
              ? "$" +
                filt[0].toLocaleString("es-CO") +
                " - " +
                "$" +
                filt[1].toLocaleString("es-CO")
              : filt
          }
          onChange={() => {
            handlerChange(event, type);
          }}
          checked={checkFilter[filt] || false}
        />
        {type === "rating"
          ? [...Array(filt)].map((_, index) => (
              <i key={index} className="bi bi-star-fill"></i>
            ))
          : null}
        {type === "rating"
          ? [...Array(5 - filt)].map((_, index) => (
              <i key={index} className="bi bi-star"></i>
            ))
          : null}

        <Badgestyled bg="secondary" pill>
          {type === "price" ? countFilterPrice(filt) : countFilter(filt)}
        </Badgestyled>
      </div>
    ));
  };

  return (
    <>
      <div className="d-flex flex-column  gap-5 vh-100 pt-5">
        <div>
          <H4Styled>FILTRAR POR:</H4Styled>
        </div>
        <div>
          <AccordionStyle>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Categorias</Accordion.Header>
              <Accordion.Body>
                {generateFilter(data, "category")}
              </Accordion.Body>
            </Accordion.Item>
          </AccordionStyle>
        </div>

        <div>
          <AccordionStyle>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Almacen</Accordion.Header>
              <Accordion.Body>{generateFilter(data, "store")}</Accordion.Body>
            </Accordion.Item>
          </AccordionStyle>
        </div>

        <div>
          <AccordionStyle>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Marcas</Accordion.Header>
              <Accordion.Body>{generateFilter(data, "brand")}</Accordion.Body>
            </Accordion.Item>
          </AccordionStyle>
        </div>
        <div>
          <AccordionStyle>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Calificacion</Accordion.Header>
              <Accordion.Body>{generateFilter(data, "rating")}</Accordion.Body>
            </Accordion.Item>
          </AccordionStyle>
        </div>
        <div>
          <AccordionStyle>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Precios</Accordion.Header>
              <Accordion.Body>{generateFilter(data, "price")}</Accordion.Body>
            </Accordion.Item>
          </AccordionStyle>
        </div>
      </div>
    </>
  );
}
