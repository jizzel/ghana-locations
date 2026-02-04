import { describe, it, expect } from "vitest";
import { getCities, isValidCity, findRegionByCity, searchCities, RegionName } from "../src/index";

describe("Cities", () => {
  it("should return cities for a region", () => {
    const cities = getCities(RegionName.GreaterAccra);
    expect(cities).toContain("Accra");
    expect(cities).toContain("Tema");
  });

  it("should validate city in region", () => {
    expect(isValidCity(RegionName.GreaterAccra, "Accra")).toBe(true);
    expect(isValidCity(RegionName.GreaterAccra, "Kumasi")).toBe(false);
    expect(isValidCity("Invalid", "Accra")).toBe(false);
  });

  it("should find region by city", () => {
    const region = findRegionByCity("Kumasi");
    expect(region?.name).toBe(RegionName.Ashanti);

    const unknown = findRegionByCity("Unknown City");
    expect(unknown).toBeUndefined();
  });

  it("should search cities", () => {
    const results = searchCities("accra");
    expect(results).toContainEqual({ region: RegionName.GreaterAccra, city: "Accra" });

    const partial = searchCities("Kuma");
    expect(partial).toContainEqual({ region: RegionName.Ashanti, city: "Kumasi" });

    expect(searchCities("")).toHaveLength(0);
  });
});
