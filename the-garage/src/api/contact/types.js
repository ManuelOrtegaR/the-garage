import { z } from 'zod';

export const createQuestionOutputSchema = z.object({
  mensaje: z.string(),
});

export const getAllQuestionsOutputSchema = z.array(
  z.object({
    id: z.string(),
    fecha_consulta: z.string(),
    consulta: z.string(),
    respuesta: z.string().optional().nullable(),
    correo_contacto: z.string(),
    nombre_contacto: z.string(),
    estado_consulta: z.string(),
  }),
);

export const getQuestionIdOutputSchema = z.object({
  id: z.string(),
  fecha_consulta: z.string(),
  consulta: z.string(),
  respuesta: z.string().optional().nullable(),
  correo_contacto: z.string(),
  nombre_contacto: z.string(),
  estado_consulta: z.string(),
});
