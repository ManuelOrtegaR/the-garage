import { useEffect, useState } from 'react';

import { getCompanys } from '../api/company';

export const useCompanys = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const cargarEmpresas = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await getCompanys();
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarEmpresas();
  }, []);

  return { data, loading, error };
};
