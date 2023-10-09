import { instance as http } from '../http';
import {
  decodeOrdenesByIdOutput,
  decodeOrdenesOutput,
  decodeUpdateOrderOutput,
} from './decoder';

export const getOrders = async () => {
  const { data: response } = await http.get('/orden_productos');
  const data = await decodeOrdenesOutput(response.data);

  const orders = data.filter((order) => {
    if (order.estados.length >= 2 && order.estados[1].estado === 'Pagada') {
      return order;
    }
  });
  return orders;
};

export const updateOrderStatus = async (id, status = null) => {
  if (status === null) {
    const response = await http.put(`/orden_productos/${id}`);
    const data = await decodeUpdateOrderOutput(response.data);
    return data;
  } else {
    const response = await http.put(`/orden_productos/${id}`, {
      estado: status,
    });
    const data = await decodeUpdateOrderOutput(response.data);
    return data;
  }
};

export const getPurchaseDetails = async (id) => {
  try {
    const { data: response } = await http.get(`/orden_productos/${id}`);
    const data = await decodeOrdenesByIdOutput(response.data);
    let products = [];
    await Promise.all(
      data.detalle_orden_productos.map(async (product) => {
        const productData = await http.get(`/productos/${product.id_producto}`);
        products.push(productData.data.data);
      }),
    );

    return { ...data, products };
  } catch (error) {
    return Promise.reject(error);
  }
};
