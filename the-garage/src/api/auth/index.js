import { instance as http } from '../http';

export const signIn = async (payload) => {
  try {
    const body = {
      correo: payload.email,
      contrasena: payload.password,
    };
    const { data: responseData } = await http.post(
      `${import.meta.env.VITE_API_URL}/auth/signin`,
      body,
    );
    const { data, meta } = responseData;
    const { user = {}, typeData = {} } = data;
    return {
      name: typeData.nombre_completo || typeData.razon_social,
      type: user.tipo_usuario,
      token: meta.token,
      user,
      typeData,
    };
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (payload, role) => {
  const bodyData = (payload, role) => {
    if (role === 'cliente') {
      return {
        userData: {
          correo: payload.email,
          contrasena: payload.password,
          tipo_usuario: 'Cliente',
          url_foto: 'https://fotocliente.png',
          departamento: payload.department,
          ciudad: payload.city,
          direccion: payload.address,
        },
        userTypeData: {
          nombre_completo: payload.name,
          tipo_documento: payload.document_type,
          numero_documento: payload.document_number,
          telefono: payload.phone_number,
        },
      };
    } else {
      return {
        userData: {
          correo: payload.email,
          contrasena: payload.password,
          tipo_usuario: 'Empresa',
          departamento: payload.department,
          ciudad: payload.city,
          direccion: payload.address,
        },
        userTypeData: {
          razon_social: payload.name,
          tipo_documento_empresa: 'NIT',
          numero_documento_empresa: payload.nit,
          telefono: payload.phone,
          sitio_web: payload.website,
          representante_legal: payload.legal_rep_name,
          tipo_documento_representante: payload.legal_rep_document_type,
          numero_documento_representante: payload.legal_rep_document_number,
          correo_representante: payload.legal_rep_email,
          descripcion: payload.description,
        },
      };
    }
  };

  try {
    const profilePhoto = payload.profile_photo ? payload.profile_photo : null;
    const cCommerceDocument = payload.c_commerce_document
      ? payload.c_commerce_document
      : null;

    const body = bodyData(payload, role);

    const form = new FormData();
    form.append('data', JSON.stringify(body));
    profilePhoto && form.append('images', profilePhoto);
    cCommerceDocument && form.append('images', cCommerceDocument);

    const { data: responseData } = await http.post(
      `${import.meta.env.VITE_API_URL}/auth/${role}/signup`,
      form,
    );
    return responseData;
  } catch (error) {
    return error;
  }
};

export const reSendEmail = async (payload) => {
  try {
    const body = {
      correo: payload,
    };
    const { data: responseData } = await http.post(
      `${import.meta.env.VITE_API_URL}/auth/reenviarcorreo`,
      body,
    );
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export const activateAccount = async (token) => {
  try {
    const { data: responseData } = await http.post(
      `${import.meta.env.VITE_API_URL}/auth/confirmacion/${token}`,
    );
    return responseData;
  } catch (error) {
    return error;
  }
};

export const passwordRecovery = async (payload) => {
  try {
    const body = {
      correo: payload,
    };
    const { data: responseData } = await http.post(
      `${import.meta.env.VITE_API_URL}/auth/recuperarcontrasena`,
      body,
    );
    return responseData;
  } catch (error) {
    return error;
  }
};

export const passwordReset = async (payload, token) => {
  try {
    const body = {
      contrasena: payload,
    };
    const { data: responseData } = await http.patch(
      `${import.meta.env.VITE_API_URL}/auth/recuperarcontrasena/${token}`,
      body,
    );
    return responseData;
  } catch (error) {
    return error;
  }
};
