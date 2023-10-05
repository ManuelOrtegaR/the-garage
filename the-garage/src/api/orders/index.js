import { instance as http } from '../http';

export const getOrders = async () => {
  const { data } = await http.get('/orden_productos');

  const orders = data.data.filter((order) => {
    if (order.estados.length >= 2 && order.estados[1].estado === 'Pagada') {
      return order;
    }
  });
  return orders;
};

export const updateOrderStatus = async (id, status = null) => {
  if (status === null) {
    const response = await http.put(`/orden_productos/${id}`);
    return response;
  } else {
    const response = await http.put(`/orden_productos/${id}`, {
      estado: status,
    });
    return response;
  }
};
