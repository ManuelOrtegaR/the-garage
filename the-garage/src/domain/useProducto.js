import { getProduct } from "../api/products";
import useSWR from "swr";

export const useProducto = ({ id }) => {
  const {
    data: response,
    error,
    isLoading,
  } = useSWR(`productos/${id}`, () => getProduct({ id }));

  return { data: response?.data, loading: isLoading, error };
};
