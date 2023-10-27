import { instance as http } from "../http";

export const createConversacion = async (payload) => {
  try {
    const { data: response } = await http.post(`/conversaciones/`, payload);

    return response.data;
  } catch (error) {
    console.log("error", error.message);
    return Promise.reject(error.message);
  }
};

export const getConversaciones = async () => {
  try {
    const { data: response } = await http.get(`/conversaciones`);
    // const data = response.data;

    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getConversacion = async ({ id }) => {
  try {
    const { data: response } = await http.get(`/conversaciones/${id}`);
    // const data = response.data;
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const update = async (id, payload) => {
  try {
    const { data: response } = await http.put(`/conversaciones/${id}`, payload);

    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
