import { z } from "zod";

export const sendEmailSchema = z
  .object({
    data: z.string(),
  })
  .strict();
export type SendEmailSchemaType = z.infer<typeof sendEmailSchema>;
