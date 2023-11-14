import {
  ratingOutputSchema,
  orderRatingsOutputSchema,
  allRatingsOutputSchema,
} from './types';

export async function decodeRating(payload) {
  try {
    const data = await ratingOutputSchema.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function decodeRatingbyOrder(payload) {
  try {
    const data = await orderRatingsOutputSchema.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function decodeAllRatings(payload) {
  try {
    const data = await allRatingsOutputSchema.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
