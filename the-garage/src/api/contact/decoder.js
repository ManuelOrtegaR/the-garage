import {
  createQuestionOutputSchema,
  getAllQuestionsOutputSchema,
  getQuestionIdOutputSchema,
} from './types';

export async function decodeCreateQuestion(payload) {
  try {
    const data = await createQuestionOutputSchema.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function decodeAllQuestion(payload) {
  try {
    const data = await getAllQuestionsOutputSchema.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function decodeQuestionId(payload) {
  try {
    const data = await getQuestionIdOutputSchema.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
