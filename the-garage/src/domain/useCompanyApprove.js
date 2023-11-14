import { useEffect, useState } from 'react';

import { getCompanies } from '../api/admin';

export const useCompanyApprove = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const cargarPeticiones = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await getCompanies();
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarPeticiones();
  }, []);

  return { data, loading, error };
};
