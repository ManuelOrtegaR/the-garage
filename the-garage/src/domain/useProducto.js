import { getProduct } from "../api/products";
import useSWR from "swr";

export const useProducto = ({ id }) => {
  const {
    data: response,
    error,
    isLoading,
  } = useSWR(`productos/${id}`, () => getProduct({ id }));
  console.log(id, response?.data, error, isLoading);

  return { data: response?.data, loading: isLoading, error };
};
