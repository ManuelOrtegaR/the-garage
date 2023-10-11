import { instance as http } from '../http';

export const createRating = async (id, rating) => {
  const { data, status } = await http.post(
    `/productos/${id}/valoraciones/`,
    rating,
  );
  return { data, status };
};

export const getRatings = async (id) => {
  const body = {
    orderId: id,
  };
  const { data } = await http.post(`/orden_productos/valoraciones`, body);
  return data;
};
