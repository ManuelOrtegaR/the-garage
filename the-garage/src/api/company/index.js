import { instance as http } from "../http";
import { decodeCompanyOutputHome } from "./decoder";

export async function getCompanys() {
  try {
    const { data: response } = await http.get(`/perfil/empresas`);
    const data = await Promise.all(
      response.data.map((elemento) => decodeCompanyOutputHome(elemento))
    );

    return { data, meta: response.meta };
  } catch (error) {
    return Promise.reject(error.message);
  }
}
