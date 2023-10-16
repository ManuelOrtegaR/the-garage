import {
  ClientUdpateOutput,
  CompanyUdpateOutput,
  CompanyDetailsOutput,
  AdminUpdateOutput,
} from './types';

export async function decodeClientUpdate(payload) {
  try {
    const data = await ClientUdpateOutput.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function decodeCompanyUpdate(payload) {
  try {
    const data = await CompanyUdpateOutput.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
export async function decodeDetailsUpdate(payload) {
  try {
    const data = await CompanyDetailsOutput.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function decodeAdminUpdate(payload) {
  try {
    const data = await AdminUpdateOutput.parseAsync(payload);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}
