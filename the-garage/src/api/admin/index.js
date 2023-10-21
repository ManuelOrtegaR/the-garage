import { instance as http } from '../http';
import { decodeCompanies, decodeCompanyId } from './decoder';

export const getCompanies = async () => {
  const { data: response } = await http.get('/perfil/usuarios/Empresa');

  const data = await decodeCompanies(response);

  const companies = data.data.filter((company) => {
    if (company.estatus === 'Verificando') {
      return company;
    }
  });

  return companies;
};

export const getCompanyById = async (id) => {
  const { data: response } = await http.get(`/perfil/${id}`);

  const data = await decodeCompanyId(response);

  return data;
};

export const companyDecision = async (id, decision) => {
  const body = {
    userData: {
      estatus: decision,
    },
  };

  const form = new FormData();
  form.append('data', JSON.stringify(body));
  await http.put(`/perfil/${id}`, form);
};

export const getAllAccounts = async () => {
  const { data: response } = await http.get('/perfil/usuarios');

  const accounts = response.data.filter((user) => {
    if (
      user.estatus !== 'Verificando' &&
      user.tipo_usuario !== 'Administrador'
    ) {
      return user;
    }
  });

  return accounts;
};
