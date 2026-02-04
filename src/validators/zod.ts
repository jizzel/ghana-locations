import { z } from "zod";
import { isValidRegion, isValidCity } from "../index";

export const ghanaRegionSchema = z.string().refine(isValidRegion, {
  message: "Invalid Ghana region name or slug",
});

export const ghanaLocationSchema = z
  .object({
    region: z.string(),
    city: z.string(),
  })
  .refine((data) => isValidCity(data.region, data.city), {
    message: "Invalid city for the specified region",
    path: ["city"],
  });
