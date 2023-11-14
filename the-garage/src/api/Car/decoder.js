import { paymentOutputSchema } from './types';

export async function decodePayment(payload) {
  try {
    const data = await paymentOutputSchema.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
