import { useEffect, useState } from 'react';
import { getRatings } from '../api/rating';

export const useRatings = (items, id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const cargarValoraciones = async () => {
    setLoading(true);
    setError('');

    let newItems = items;

    try {
      const response = await getRatings(id);
      items.map(async (item, index) => {
        response.map((rating) => {
          if (
            rating.id_producto === item.id_producto &&
            rating.producto.valoraciones.length > 0
          ) {
            (newItems[index].calificacion =
              rating.producto.valoraciones[0].calificacion),
              (newItems[index].comentarios =
                rating.producto.valoraciones[0].comentarios);
          }
        });
      });

      setData(newItems);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarValoraciones();
  }, []);

  return { data, loading, error };
};
