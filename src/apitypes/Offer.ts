import { z } from "zod";

export const GetOffersRequest = z.object({
  skip: z.coerce.number().optional(),
  take: z.coerce.number().optional(),
  sortBy: z.enum(["id", "price", "createAt", "expireAt"]).optional(),
  sortDir: z.enum(["desc", "asc"]).optional(),
});
export type GetOffersRequest = z.infer<typeof GetOffersRequest>;
