import { instance as http } from '../http';
import {
  decodeAllQuestion,
  decodeCreateQuestion,
  decodeQuestionId,
} from './decoder';

export const sendQuestion = async ({ nombre, correo, mensaje }) => {
  const body = {
    nombre,
    correo,
    mensaje,
  };
  const { data: response } = await http.post('/consultas', body);

  const data = await decodeCreateQuestion(response);

  return data;
};

export const getQuestions = async () => {
  try {
    const { data: response } = await http.get('/consultas');

    const data = await decodeAllQuestion(response);

    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getQuestionById = async ({ id }) => {
  try {
    const { data: response } = await http.get(`/consultas/${id}`);

    const data = await decodeQuestionId(response);

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

  const data = await decodeQuestionId(response);

  return data;
};
