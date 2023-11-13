import useSWR from 'swr';

import { getCompanyById } from '../api/admin';

export const useCompanyId = (idEmpresa) => {
  const {
    data: response,
    error,
    isLoading,
  } = useSWR(`perfil/${idEmpresa}`, () => getCompanyById(idEmpresa));

  return { data: response, loading: isLoading, error };
};
