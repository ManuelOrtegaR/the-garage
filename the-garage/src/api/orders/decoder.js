import {
  ordenSchemaById,
  ordenesSchemaOutput,
  updateStatusSchemaOutput,
} from './types';

/**
 * Este decoder se encarga de decodificar la respuesta de la API de productos para obtener un producto y asi validar que los datos que se reciben son los correctos.
 */
export async function decodeOrdenesOutput(payload) {
  try {
    const data = await ordenesSchemaOutput.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function decodeUpdateOrderOutput(payload) {
  try {
    const data = await updateStatusSchemaOutput.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
export async function decodeOrdenesByIdOutput(payload) {
  try {
    const data = await ordenSchemaById.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
