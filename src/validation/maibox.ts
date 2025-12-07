import { z } from "zod";

export const addSubscriberSchema = z
  .object({
    itemId: z.string(),
    email: z.string(),
  })
  .strict();
