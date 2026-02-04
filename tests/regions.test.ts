import { describe, it, expect } from "vitest";
import { getRegions, getRegion, isValidRegion, RegionName, RegionSlug } from "../src/index";

describe("Regions", () => {
  it("should return all 16 regions", () => {
    const regions = getRegions();
    expect(regions).toHaveLength(16);
  });

  it("should get a region by name", () => {
    const region = getRegion(RegionName.GreaterAccra);
    expect(region.name).toBe(RegionName.GreaterAccra);
    expect(region.slug).toBe(RegionSlug.GreaterAccra);
    expect(region.cities).toContain("Accra");
  });

  it("should get a region by slug", () => {
    const region = getRegion(RegionSlug.Ashanti);
    expect(region.name).toBe(RegionName.Ashanti);
    expect(region.slug).toBe(RegionSlug.Ashanti);
  });

  it("should throw for invalid region identifier", () => {
    expect(() => getRegion("Invalid Region")).toThrow("Invalid region identifier");
  });

  it("should validate regions correctly", () => {
    expect(isValidRegion(RegionName.Central)).toBe(true);
    expect(isValidRegion(RegionSlug.Central)).toBe(true);
    expect(isValidRegion("Invalid")).toBe(false);
  });
});
