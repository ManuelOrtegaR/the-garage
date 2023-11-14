import { z } from 'zod';
//aqui debo importar el esquemas de la empresa dueña de ese producto que viene en el resutado de productos

export const ProductOuput = z
  .object({
    id: z.string(),
    id_empresa: z.string(),
    //id_categoria: z.string(),
    nombre: z.string(),
    descripcion: z.string(),
    ficha_tecnica: z.string(),
    precio: z.number(),
    cantidad_disponible: z.number(),
    estatus: z.boolean(),
    tipo_entrega: z.string(),
    fecha_creacion: z.string(),
    fecha_actualizacion: z.string().nullable().optional(),
    marca: z.string(),
    impuestos: z.string(),
    // me falta fotos, valoraciones,
  })
  .catchall(z.unknown());
