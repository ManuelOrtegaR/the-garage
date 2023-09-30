import { createProduct } from "../api/products";

export const useCreateProduct = () => {
  async function crearProducto(payload) {
    try {
      await createProduct(payload);
    } catch (error) {
      return Promise.reject(error.message);
    }
  }

  return { actions: { crearProducto } };
};
