import { z } from 'zod';

export const paymentOutputSchema = z.object({
  paymentUrl: z.string(),
});
