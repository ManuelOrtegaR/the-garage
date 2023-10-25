import { instance as http } from '../http';

export const sendQuestion = async ({ nombre, correo, mensaje }) => {
  const body = {
    nombre,
    correo,
    mensaje,
  };
  const { data: response } = await http.post('/consultas', body);

  return response;
};

export const getQuestions = async () => {
  try {
    const { data } = await http.get('/consultas');
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getQuestionById = async ({ id }) => {
  try {
    const { data } = await http.get(`/consultas/${id}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const sendResponse = async ({ id, respuesta }) => {
  const body = {
    respuesta,
  };
  const { data: response } = await http.put(`/consultas/${id}`, body);

  return response;
};
