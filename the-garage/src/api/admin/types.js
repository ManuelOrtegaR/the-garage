import { z } from 'zod';

const companySchema = z.object({
  id: z.string(),
  correo: z.string(),
  tipo_usuario: z.string(),
  estatus: z.string(),
  url_foto: z.string(),
  cliente: z.string().nullable(),
  fecha_creacion: z.string(),
  empresa: z.object({
    numero_documento_empresa: z.string(),
    razon_social: z.string(),
  }),
});

export const companiesSchema = z.object({
  data: z.array(companySchema),
  meta: z.object({
    direction: z.string(),
    limit: z.number(),
    offset: z.number(),
    orderBy: z.string(),
    total: z.number(),
  }),
});

export const companyIdSchema = z.object({
  ciudad: z.string(),
  cliente: z.string().nullable(),
  correo: z.string(),
  departamento: z.string(),
  direccion: z.string(),
  estatus: z.string(),
  fecha_creacion: z.string(),
  fecha_actualizacion: z.string(),
  id: z.string(),
  tipo_usuario: z.string(),
  url_foto: z.string(),
  empresa: z.object({
    camara_comercio: z.string(),
    correo_representante: z.string(),
    descripcion: z.string(),
    id: z.string(),
    id_usuario: z.string(),
    numero_documento_empresa: z.string(),
    numero_documento_representante: z.string(),
    razon_social: z.string(),
    representante_legal: z.string(),
    sitio_web: z.string(),
    telefono: z.string(),
    tipo_documento_empresa: z.string(),
    tipo_documento_representante: z.string(),
  }),
});
