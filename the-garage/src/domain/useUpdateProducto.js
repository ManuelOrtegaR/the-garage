import { updateProduct } from "../api/products";

export const useUpdateProducto = () => {
  async function actualizarProducto(payload, id) {
    try {
      await updateProduct(payload, id);
    } catch (error) {
      return Promise.reject(error.message);
    }
  }

  return { actions: { actualizarProducto } };
};
