import useSWR from 'swr';
import { getAllAccounts } from '../api/admin';

export const useAccounts = () => {
  const {
    data: response,
    error,
    isLoading,
  } = useSWR(`perfil/usuarios`, () => getAllAccounts());

  return { data: response, loading: isLoading, error };
};
