import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getPurchaseDetails } from '../api/orders';

export const usePurchase = () => {
  const location = useLocation();
  const orderID = new URLSearchParams(location.search).get(
    'external_reference',
  );

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getPurchase = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await getPurchaseDetails(orderID);
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPurchase();
  }, []);

  return { data, loading, error };
};
