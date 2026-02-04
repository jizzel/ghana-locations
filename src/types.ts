import { RegionName, RegionSlug } from "./data/regions";

export interface Region {
  name: RegionName;
  slug: RegionSlug;
  cities: string[];
}

export interface GhanaLocation {
  region: RegionName;
  city: string;
}
