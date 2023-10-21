import { companiesSchema, companyIdSchema } from './types';

export async function decodeCompanies(payload) {
  try {
    const data = await companiesSchema.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function decodeCompanyId(payload) {
  try {
    const data = await companyIdSchema.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
