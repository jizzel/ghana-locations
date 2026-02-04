import { RegionName, RegionSlug, regions as regionsData } from "./data/regions";
import { citiesByRegion } from "./data/cities";
import { Region, GhanaLocation } from "./types";

export { RegionName, RegionSlug, citiesByRegion };
export * from "./types";

export const regions: Region[] = regionsData.map((r) => ({
  ...r,
  cities: citiesByRegion[r.name],
}));

/**
 * Returns all regions with their cities
 */
export function getRegions(): Region[] {
  return regions;
}

/**
 * Returns cities for a region (throws if invalid)
 */
export function getCities(region: RegionName | RegionSlug | string): string[] {
  const r = getRegion(region);
  return r.cities;
}

/**
 * Get a single region by name or slug
 */
export function getRegion(identifier: RegionName | RegionSlug | string): Region {
  const found = regions.find(
    (r) => r.name === identifier || r.slug === identifier
  );
  if (!found) {
    throw new Error(`Invalid region identifier: ${identifier}`);
  }
  return found;
}

/**
 * Check if a string is a valid region name or slug
 */
export function isValidRegion(value: string): boolean {
  return regions.some((r) => r.name === value || r.slug === value);
}

/**
 * Check if a city belongs to a region
 */
export function isValidCity(region: string, city: string): boolean {
  if (!isValidRegion(region)) return false;
  const r = getRegion(region);
  return r.cities.includes(city);
}

/**
 * Validate a full location object
 */
export function isValidLocation(location: { region: string; city: string }): boolean {
  return isValidCity(location.region, location.city);
}

/**
 * Reverse lookup: find which region a city belongs to (first match)
 */
export function findRegionByCity(city: string): Region | undefined {
  return regions.find((r) => r.cities.includes(city));
}

/**
 * Case-insensitive search across all cities
 */
export function searchCities(query: string): GhanaLocation[] {
  if (!query) return [];
  const normalizedQuery = query.toLowerCase();
  const results: GhanaLocation[] = [];

  for (const region of regions) {
    for (const city of region.cities) {
      if (city.toLowerCase().includes(normalizedQuery)) {
        results.push({ region: region.name, city });
      }
    }
  }

  return results;
}
