import { describe, it, expect } from "vitest";
import { ghanaRegionSchema, ghanaLocationSchema } from "../src/validators/zod";
import { 
  IsGhanaRegionConstraint, 
  IsGhanaCityConstraint, 
  IsGhanaLocationConstraint 
} from "../src/validators/class-validator";
import { RegionName } from "../src/data/regions";

describe("Validation Integrations", () => {
  describe("Zod", () => {
    it("should validate region name", () => {
      expect(ghanaRegionSchema.safeParse(RegionName.GreaterAccra).success).toBe(true);
      expect(ghanaRegionSchema.safeParse("Invalid").success).toBe(false);
    });

    it("should validate location", () => {
      expect(
        ghanaLocationSchema.safeParse({ region: RegionName.GreaterAccra, city: "Accra" }).success
      ).toBe(true);
      expect(
        ghanaLocationSchema.safeParse({ region: RegionName.GreaterAccra, city: "Kumasi" }).success
      ).toBe(false);
    });
  });

  describe("class-validator", () => {
    const regionConstraint = new IsGhanaRegionConstraint();
    const cityConstraint = new IsGhanaCityConstraint();
    const locationConstraint = new IsGhanaLocationConstraint();

    it("should validate region", () => {
      expect(regionConstraint.validate(RegionName.GreaterAccra)).toBe(true);
      expect(regionConstraint.validate("Invalid")).toBe(false);
    });

    it("should validate city with region context", () => {
      const args = {
        constraints: ["region"],
        object: { region: RegionName.GreaterAccra },
      } as any;
      expect(cityConstraint.validate("Accra", args)).toBe(true);
      expect(cityConstraint.validate("Kumasi", args)).toBe(false);
    });

    it("should validate location object", () => {
      expect(locationConstraint.validate({ region: RegionName.GreaterAccra, city: "Accra" })).toBe(true);
      expect(locationConstraint.validate({ region: RegionName.GreaterAccra, city: "Kumasi" })).toBe(false);
    });
  });
});
