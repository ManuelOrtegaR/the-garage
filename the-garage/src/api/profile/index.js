import { instance as http } from '../http';
import {
  decodeAdminUpdate,
  decodeClientUpdate,
  decodeCompanyUpdate,
  decodeDetailsUpdate,
} from './decoder';

export const updatePassword = async (password, newPassword) => {
  await http.put('/perfil/cambiarcontrasena', {
    password,
    newPassword,
  });
};

export const updateClientProfile = async (profile) => {
  const body = {
    userData: {
      ciudad: profile.ciudad,
      departamento: profile.departamento,
      direccion: profile.direccion,
    },
    userTypeData: {
      nombre_completo: profile.nombre_completo,
      telefono: profile.telefono,
    },
  };
  const profilePhoto = profile.profile_photo ? profile.profile_photo : null;
  const form = new FormData();
  form.append('data', JSON.stringify(body));
  profilePhoto && form.append('images', profilePhoto);
  const { data } = await http.put('/perfil', form);

  const decoded = await decodeClientUpdate(data);
  return decoded;
};

export const updateCompanyProfile = async (profile) => {
  const body = {
    userData: {
      ciudad: profile.ciudad,
      departamento: profile.departamento,
      direccion: profile.direccion,
    },
    userTypeData: {
      telefono: profile.telefono,
    },
  };
  const profilePhoto = profile.profile_photo ? profile.profile_photo : null;
  const form = new FormData();
  form.append('data', JSON.stringify(body));
  profilePhoto && form.append('images', profilePhoto);
  const { data } = await http.put('/perfil', form);
  const decoded = await decodeCompanyUpdate(data);
  return decoded;
};

export const updateCompanyDetails = async (details) => {
  const body = {
    userTypeData: {
      camara_comercio: details.camara_comercio,
      correo_representante: details.correo_representante,
      descripcion: details.descripcion,
      numero_documento_representante: details.numero_documento_representante,
      representante_legal: details.representante_legal,
      sitio_web: details.sitio_web,
      tipo_documento_representante: details.tipo_documento_representante,
    },
  };
  const form = new FormData();
  form.append('data', JSON.stringify(body));
  const { data } = await http.put('/perfil', form);
  const decoded = await decodeDetailsUpdate(data);
  return decoded;
};

export const updateAdminProfile = async (profile) => {
  const body = {
    userData: {
      ciudad: profile.ciudad,
      departamento: profile.departamento,
      direccion: profile.direccion,
    },
  };

  const profilePhoto = profile.profile_photo ? profile.profile_photo : null;
  const form = new FormData();
  form.append('data', JSON.stringify(body));
  profilePhoto && form.append('images', profilePhoto);
  const { data } = await http.put('/perfil', form);

  const decoded = await decodeAdminUpdate(data);
  return decoded;
};
