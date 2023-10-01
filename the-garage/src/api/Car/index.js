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
    estado: "creado",
    subtotal: 0.0,
  };
  const body = {
    ordenProductos,
    detallesOrdenProductos,
  };
  try {
    console.log("La variable de entorno", import.meta.env.VITE_API_URL);
    const response = await http.post(
      `${import.meta.env.VITE_API_URL}/orden_productos`,
      body
    );
    const { data } = response;
    const { paymentUrl } = data;
    console.log("paymentUrl en la funcion ", paymentUrl);
    return paymentUrl;
  } catch (error) {
    console.log(error);
    return error;
  }
};
