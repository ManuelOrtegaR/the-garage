import { useEffect, useState } from 'react';

import { getOrders } from '../api/orders';

export const useOrders = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const cargarOrdenes = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await getOrders();
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarOrdenes();
  }, []);

  return { data, loading, error };
};
