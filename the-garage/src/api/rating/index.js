import { instance as http } from "../http";

export const createRating = async (id, rating) => {
  const { data, status } = await http.post(
    `/productos/${id}/valoraciones/`,
    rating
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

export const allRatings = async () => {
  try {
    const { data: response } = await http.get(
      `/valoraciones?orderBy=fecha_creacion`
    );
    const data = response.data;
    return { data, meta: response.meta };
  } catch (error) {
    return Promise.reject(error.message);
  }
};
