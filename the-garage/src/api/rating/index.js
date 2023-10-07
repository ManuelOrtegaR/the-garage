import { instance as http } from '../http';

export const createRating = async (id, rating) => {
  const { data, status } = await http.post(
    `/productos/${id}/valoraciones/`,
    rating,
  );
  return { data, status };
};
