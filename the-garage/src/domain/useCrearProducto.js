import { createProduct } from "../api/products";
import { useState } from "react";

export const useCreateProduct = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function crearProducto(payload) {
    setLoading(true);
    setError("");
    try {
      const response = await createProduct(payload);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    loading,
    error,
    actions: { crearProducto },
  };
};
