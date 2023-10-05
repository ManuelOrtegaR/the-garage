import { ERRORS } from "./conts";

export function promedioValoraciones(valoraciones) {
  let suma = 0;
  if (valoraciones.length === 0) return 0;
  valoraciones.forEach((valoracion) => {
    suma += valoracion.calificacion;
  });
  return Math.round(suma / valoraciones.length);
}

export function medianaValoraciones(valoraciones) {
  if (valoraciones.length === 0) return 0;
  let valoracionesOrdenadas = [];
  valoraciones.forEach((valoracion) => {
    valoracionesOrdenadas.push(valoracion.calificacion);
  });
  valoracionesOrdenadas.sort((a, b) => a - b);
  const mitad = Math.floor(valoracionesOrdenadas.length / 2);

  // si es par
  if (valoracionesOrdenadas.length % 2 === 0) {
    return (
      (valoracionesOrdenadas[mitad - 1] + valoracionesOrdenadas[mitad]) / 2
    );
  }

  // si es impar
  return valoracionesOrdenadas[mitad];
}

export function generarQueryFiltros(filtros) {
  let query = "";
  let categorias = filtros.category;
  let marcas = filtros.brand;
  let precios = filtros.price;
  let calificaciones = filtros.rating;
  let empresas = filtros.store;

  if (categorias !== undefined) {
    categorias = reemplazarEspacios(categorias);
    query += `filterCategorias=${categorias}&`;
  }
  if (marcas !== undefined) {
    marcas = reemplazarEspacios(marcas);
    query += `filterMarcas=${marcas}&`;
  }
  if (precios !== undefined) {
    precios = precios.split(",");
    console.log(precios);
    query += `precioMin=${precios[0]}&precioMax=${precios[1]}&`;
  }
  if (calificaciones !== undefined) {
    calificaciones = reemplazarEspacios(calificaciones);
    query += `filterCalificacion=${calificaciones}&`;
  }
  if (empresas !== undefined) {
    empresas = reemplazarEspacios(empresas);
    query += `filterAlmacen=${empresas}&`;
  }

  if (query.endsWith("&")) {
    query = query.slice(0, -1);
  }

  return query;
}

const reemplazarEspacios = (texto) => {
  return texto.replace(/ /g, "%20");
};

export function objetoEstaVacio(obj) {
  for (let key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      return false; // Si encuentra al menos una propiedad, el objeto no está vacío
    }
  }
  return true; // Si no encuentra ninguna propiedad, el objeto está vacío
}

// function to format error messages
export function formatError(e) {
  if (e.name === "ZodError") {
    return ERRORS.DECODE;
  }
  if (typeof e === "string") {
    return e;
  }
  if (e instanceof Error || e.message) {
    return e.message;
  }
}

// generar rangos precios
export const generarRangos = (elements) => {
  const minRangos = 5;
  const tamanoRango = Math.ceil(elements.length / minRangos);
  let rangoActual = [];
  const rangos = [];
  elements.forEach((element) => {
    if (rangoActual.length >= tamanoRango) {
      rangos.push([rangoActual[0], rangoActual[rangoActual.length - 1]]);
      rangoActual = [];
    }
    rangoActual.push(element);
  });
  if (rangoActual.length > 0) {
    rangos.push([rangoActual[0], rangoActual[rangoActual.length - 1]]);
  }

  return rangos;
};
