import { ProductOuput } from "./types";

/**
 * Este decoder se encarga de decodificar la respuesta de la API de productos para obtener un producto y asi validar que los datos que se reciben son los correctos.
 */
export async function decodeProductOutput(payload) {
  try {
    const data = await ProductOuput.parseAsync(payload);

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
