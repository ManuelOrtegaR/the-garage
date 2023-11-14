import { z } from 'zod';

export const ratingOutputSchema = z.object({
  data: z.object({
    id: z.string(),
    calificacion: z.number(),
    comentarios: z.string(),
    id_cliente: z.string(),
    id_producto: z.string(),
    fecha_creacion: z.string(),
    cliente: z.object({
      id: z.string(),
      nombre_completo: z.string(),
    }),
  }),
});

const productSchema = z.object({
  id: z.string(),
  id_empresa: z.string(),
  id_categoria: z.string(),
  nombre: z.string(),
  descripcion: z.string(),
  ficha_tecnica: z.string(),
  precio: z.number(),
  cantidad_disponible: z.number(),
  estatus: z.boolean(),
  tipo_entrega: z.string(),
  fecha_creacion: z.string(),
  fecha_actualizacion: z.string().optional().nullable(),
  marca: z.string(),
  impuestos: z.string(),
  valoraciones: z.array(
    z.object({
      id: z.string(),
      calificacion: z.number(),
      comentarios: z.string(),
      id_cliente: z.string(),
      id_producto: z.string(),
      fecha_creacion: z.string(),
    }),
  ),
});

export const orderRatingsOutputSchema = z.array(
  z.object({
    id: z.string(),
    id_orden_productos: z.string(),
    id_producto: z.string(),
    cantidad: z.number(),
    precio_unitario: z.string(),
    producto: productSchema,
  }),
);

const metaSchema = z.object({
  limit: z.number(),
  offset: z.number(),
  total: z.number(),
  orderBy: z.string(),
  direction: z.string(),
});

export const allRatingsOutputSchema = z.object({
  data: z.array(
    z.object({
      id: z.string(),
      calificacion: z.number(),
      comentarios: z.string(),
      id_cliente: z.string(),
      id_producto: z.string(),
      fecha_creacion: z.string(),
      cliente: z.object({
        nombre_completo: z.string(),
        usuario: z.object({
          url_foto: z.string(),
        }),
      }),
      producto: z.object({
        nombre: z.string(),
      }),
    }),
  ),
  meta: metaSchema,
});
