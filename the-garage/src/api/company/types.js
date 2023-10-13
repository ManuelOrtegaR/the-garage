import { z } from "zod";

export const CompanyOutputHome = z.object({
  url_foto: z.string(),
  fecha_creacion: z.string(),
  empresa: z.object({
    razon_social: z.string(),
  }),
});
