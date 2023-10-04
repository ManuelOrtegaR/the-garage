import { instance as http } from "../http";

export const createOrdenProducts = async (state) => {
  const { cart, total } = state;
  console.log("Entro a la funcion");
  console.log("El carrito", cart);

  const detallesOrdenProductos = cart.map((producto) => {
    return {
      id_producto: producto.id,
      cantidad: producto.cant,
      precio_unitario: producto.precio,
    };
  });
  const ordenProductos = {
    total: total,
    id_empresa: cart[0].id_empresa,
  };
  const body = {
    ordenProductos,
    detallesOrdenProductos,
  };
  try {
    const response = await http.post(
      `${import.meta.env.VITE_API_URL}/orden_productos`,
      body
    );
    const { data } = response;
    const { paymentUrl } = data;
    return paymentUrl;
  } catch (error) {
    console.log(error);
    return error;
  }
};
