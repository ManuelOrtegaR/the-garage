import { z } from 'zod';

const UserSchema = z
  .object({
    user: z.object({
      ciudad: z.string(),
      correo: z.string().email(),
      departamento: z.string(),
      direccion: z.string(),
      fecha_actualizacion: z.string().nullable().optional(),
      fecha_creacion: z.string(),
      tipo_usuario: z.string(),
      url_foto: z.string().optional(),
    }),
  })
  .catchall(z.unknown());

const typeDataClientSchema = z.object({
  typeData: z.object({
    nombre_completo: z.string(),
    tipo_documento: z.string(),
    numero_documento: z.string(),
    telefono: z.string(),
  }),
});

const typeDataCopmanySchema = z.object({
  typeData: z.object({
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

export const ClientUdpateOutput = UserSchema.merge(typeDataClientSchema);
export const CompanyUdpateOutput = UserSchema.merge(typeDataCopmanySchema);
export const CompanyDetailsOutput = z.object({
  user: z
    .object({
      nombre: z.string().optional(),
    })
    .nullable()
    .optional(),
  typeData: z.object({
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

export const AdminUpdateOutput = z.object({
  user: z.object({
    ciudad: z.string(),
    correo: z.string().email(),
    departamento: z.string(),
    direccion: z.string(),
    fecha_actualizacion: z.string().nullable().optional(),
    fecha_creacion: z.string(),
    tipo_usuario: z.string(),
    url_foto: z.string().optional(),
  }),
  typeData: z
    .object({
      nombre_completo: z.string().optional().nullable(),
    })
    .optional()
    .nullable(),
});
