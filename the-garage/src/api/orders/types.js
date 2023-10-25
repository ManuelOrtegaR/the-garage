import { z } from 'zod';

const productoSchema = z.object({
  id_producto: z.string(),
  cantidad: z.number(),
  precio_unitario: z.string(),
  nombre: z.string(),
  descripcion: z.string(),
  fotos: z.array(z.object({ url_foto: z.string() })),
  id_empresa: z.string(),
});

const detalleOrdenSchema = z.array(productoSchema);

const estadosSchema = z.array(
  z.object({
    estado: z.string(),
    fecha_estado: z.string(),
  }),
);

const ordenSchema = z.object({
  foto_cliente: z.string(),
  foto_empresa: z.string(),
  id: z.string(),
  id_cliente: z.string(),
  id_empresa: z.string(),
  fecha_orden: z.string(),
  no_orden: z.number(),
  total: z.string(),
  detalle_orden_productos: detalleOrdenSchema,
  estados: estadosSchema,
});

export const ordenSchemaById = z.object({
  id: z.string(),
  id_cliente: z.string(),
  id_empresa: z.string(),
  no_orden: z.number(),
  fecha_orden: z.string(),
  total: z.string(),
  detalle_orden_productos: z.array(
    z.object({
      cantidad: z.number(),
      id: z.string(),
      id_orden_productos: z.string(),
      id_producto: z.string(),
      precio_unitario: z.string(),
    }),
  ),
  _count: z.object({
    estado: z.number(),
  }),
});

export const ordenesSchemaOutput = z.array(ordenSchema);

const status = z.object({
  estado: z.string(),
  fecha_estado: z.string(),
  id: z.string(),
  id_orden_productos: z.string(),
});

export const updateStatusSchemaOutput = z.object({
  data: status,
  message: z.string(),
  status: z.number(),
});
