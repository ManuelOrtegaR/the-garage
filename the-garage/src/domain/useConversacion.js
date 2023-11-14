import { useState } from 'react';

import useSWR from 'swr';

import { getConversacion, update } from '../api/conversacion';

export const useConversacion = ({ id }) => {
  const { data, error, isLoading } = useSWR(
    id ? `/conversaciones/${id}` : null,
    () => getConversacion({ id }),
  );

  return { data, loading: isLoading, error };
};

export const useUpdateConversacion = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function updateConversacion(id, payload) {
    setLoading(true);
    setError('');

    try {
      const response = await update(id, payload);
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, actions: { updateConversacion } };
};
