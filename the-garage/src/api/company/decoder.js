import { CompanyOutputHome } from "./types";

export async function decodeCompanyOutputHome(payload) {
  try {
    const data = await CompanyOutputHome.parseAsync(payload);

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
