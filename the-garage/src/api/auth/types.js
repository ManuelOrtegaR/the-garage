import { z } from 'zod';

const UserSchema = z
  .object({
    user: z.object({
      correo: z.string().email(),
      tipo_usuario: z.string(),
      fecha_creacion: z.string(),
      fecha_actualizacion: z.string().nullable().optional(),
      estatus: z.string(),
      url_foto: z.string().optional(),
      departamento: z.string(),
      ciudad: z.string(),
      direccion: z.string(),
    }),
  })
  .catchall(z.unknown());

const ClientSchema = z
  .object({
    typeData: z.object({
      nombre_completo: z.string(),
      tipo_documento: z.string(),
      numero_documento: z.string(),
      telefono: z.string().min(10).max(15),
    }),
  })
  .catchall(z.unknown());

const CompanySchema = z
  .object({
    typeData: z.object({
      razon_social: z.string(),
      tipo_documento_empresa: z.string(),
      numero_documento_empresa: z.string(),
      telefono: z.string().min(10).max(15),
      sitio_web: z.string().nullable().optional(),
      camara_comercio: z.string(),
      representante_legal: z.string(),
      tipo_documento_representante: z.string(),
      numero_documento_representante: z.string(),
      correo_representante: z.string().email(),
      descripcion: z.string(),
    }),
  })
  .catchall(z.unknown());

export const SignInClientOutput = z.object({
  data: UserSchema.merge(ClientSchema),
  meta: z.object({
    token: z.string(),
  }),
});

export const SignInCompanyOutput = z.object({
  data: UserSchema.merge(CompanySchema),
  meta: z.object({
    token: z.string(),
  }),
});

export const SignInAdminOutput = z.object({
  data: z.object({
    user: z.object({
      correo: z.string().email(),
      tipo_usuario: z.string(),
      fecha_creacion: z.string(),
      fecha_actualizacion: z.string().nullable().optional(),
      estatus: z.string(),
      url_foto: z.string().optional(),
      departamento: z.string(),
      ciudad: z.string(),
      direccion: z.string(),
    }),
    typeData: z.object({
      nombre_completo: z.string().optional().nullable(),
    }),
  }),
  meta: z.object({
    token: z.string(),
  }),
});
