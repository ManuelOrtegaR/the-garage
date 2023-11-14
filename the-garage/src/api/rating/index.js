import { instance as http } from '../http';
import { decodeAllRatings, decodeRating, decodeRatingbyOrder } from './decoder';

export const createRating = async (id, rating) => {
  const { data: response, status } = await http.post(
    `/productos/${id}/valoraciones/`,
    rating,
  );

  const data = await decodeRating(response);

  return { data, status };
};

export const getRatings = async (id) => {
  const body = {
    orderId: id,
  };
  const { data: response } = await http.post(
    `/orden_productos/valoraciones`,
    body,
  );

  const data = await decodeRatingbyOrder(response);

  return data;
};

export const allRatings = async () => {
  try {
    const { data: response } = await http.get(
      `/valoraciones?orderBy=fecha_creacion`,
    );

    const decode = await decodeAllRatings(response);

    const data = decode.data;
    return { data, meta: decode.meta };
  } catch (error) {
    return Promise.reject(error.message);
  }
};
