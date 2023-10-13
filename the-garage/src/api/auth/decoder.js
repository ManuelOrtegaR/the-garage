import { SignInClientOutput, SignInCompanyOutput } from './types';

/**
 * Este decoder se encarga de decodificar la respuesta de la API de inicio de sesión y asi validar que los datos que se reciben son los correctos.
 */
export async function decodeSignIn(payload, role) {
  try {
    if (role === 'Cliente') {
      const data = await SignInClientOutput.parseAsync(payload);
      return data;
    } else if (role === 'Empresa') {
      const data = await SignInCompanyOutput.parseAsync(payload);
      return data;
    } else {
      return Promise.reject('Error al decodificar el rol');
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
