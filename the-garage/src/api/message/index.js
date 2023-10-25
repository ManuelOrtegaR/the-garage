import { instance as http } from "../http";

export const createMessage = async (payload) => {
  try {
    const { data: response } = await http.post(`/mensajes/`, payload);
    // const data = response.data;
    return { response };
  } catch (error) {
    return Promise.reject(error.message);
  }
};
