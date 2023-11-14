import { useEffect, useState } from 'react';

import { getCity, getDepartments } from '../api/localization';

export const useAdressLocation = () => {
  const [departments, setDepartments] = useState([]);
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function cargarDepartamentos() {
    setLoading(true);
    setError('');

    try {
      const response = await getDepartments();
      setDepartments(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function cargarCiudades(departmen) {
    setLoading(true);
    setError('');

    try {
      const response = await getCity(departmen);
      setCity(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    cargarDepartamentos();
  }, []);

  return {
    cargarCiudades,
    departments,
    city,
    loading,
    error,
  };
};
