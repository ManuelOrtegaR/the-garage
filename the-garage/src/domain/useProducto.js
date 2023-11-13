import useSWR from 'swr';

import { getProduct } from '../api/products';

export const useProducto = ({ id }) => {
  const {
    data: response,
    error,
    isLoading,
  } = useSWR(`productos/${id}`, () => getProduct({ id }));

  return { data: response?.data, loading: isLoading, error };
};
