import { instance as http } from "../http";
import { decodeProductOutput } from "./decoder";

/**
 * Esta función asincrónica, 'getProducts', se encarga de obtener la lista de productos desde la APi the Garage.
 * @returns {Promise} Una promesa que se resolverá con la lista de productos o se rechazará con la respuesta de error para darle un manejo de error visual.
 */

export async function getProducts(limit = 10, offset = 0) {
  try {
    console.log("entre a getProducts");
    const { data: response } = await http.get(
      `/productos?limit=${limit}&offset=${offset}`
    );
    const data = await Promise.all(
      response.data.map((elemento) => decodeProductOutput(elemento))
    );

    return { data, meta: response.meta };
  } catch (error) {
    return Promise.reject(error.message);
  }
}

/**
 * Esta funcion, se encarga de traer los productos que corrresponden con el parametro de busqueda
 */

export async function getProductsSearch(limit, offset, searchValue) {
  try {
    const { data: response } = await http.get(
      `/productos/search/${searchValue}?limit=${limit}&offset=${offset}`
    );
    const data = await Promise.all(
      response.data.map((elemento) => decodeProductOutput(elemento))
    );

    return { data, meta: response.meta };
  } catch (error) {
    return Promise.reject(error.message);
  }
}

/**
 * esta funciona me trae productos filtrados
 */

export async function getProductsFilter(query, limit, offset) {
  try {
    const { data: response } = await http.get(
      `/productos/filter?${query}&limit=${limit}&offset=${offset}`
    );
    const data = await Promise.all(
      response.data.map((elemento) => decodeProductOutput(elemento))
    );

    return { data, meta: response.meta };
  } catch (error) {
    return Promise.reject(error.message);
  }
}

/**
 * Esta función asincrónica, 'getProduct', se encarga de obtener un producto desde la APi the Garage.
 * @param {number} params.id - El id del producto a obtener.
 * @returns {Promise} Una promesa que se resolverá con el producto o se rechazará con la respuesta de error para darle un manejo de error visual.
 *
 */

export async function getProduct({ id }) {
  try {
    const { data: response } = await http.get(`/productos/${id}`);
    // const data = response.data;
    const data = await decodeProductOutput(response.data);

    return { data, meta: response.meta };
  } catch (error) {
    return Promise.reject(error.message);
  }
}

/**
 * Esta funcion asincrónica, 'createProduct', se encarga de crear un producto en la API de The Garage.
 * @param {object} payload - El payload que se enviará al crear el producto.
 * @returns {Promise} Una promesa que se resolverá con el producto creado o se rechazará con la respuesta de error para darle un manejo de error visual.
 *
 */

export async function createProduct(payload) {
  try {
    const { data: response } = await http.post(`/productos/`, payload);
    const data = response.data;
    return { data, meta: response.meta };
  } catch (error) {
    return Promise.reject(error.message);
  }
}
