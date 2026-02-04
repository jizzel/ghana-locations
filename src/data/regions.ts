export enum RegionName {
  GreaterAccra = "Greater Accra",
  Ashanti = "Ashanti",
  Western = "Western",
  WesternNorth = "Western North",
  Central = "Central",
  Eastern = "Eastern",
  Volta = "Volta",
  Oti = "Oti",
  Northern = "Northern",
  Savannah = "Savannah",
  NorthEast = "North East",
  UpperEast = "Upper East",
  UpperWest = "Upper West",
  Bono = "Bono",
  BonoEast = "Bono East",
  Ahafo = "Ahafo",
}

export enum RegionSlug {
  GreaterAccra = "greater_accra",
  Ashanti = "ashanti",
  Western = "western",
  WesternNorth = "western_north",
  Central = "central",
  Eastern = "eastern",
  Volta = "volta",
  Oti = "oti",
  Northern = "northern",
  Savannah = "savannah",
  NorthEast = "north_east",
  UpperEast = "upper_east",
  UpperWest = "upper_west",
  Bono = "bono",
  BonoEast = "bono_east",
  Ahafo = "ahafo",
}

export interface RegionInfo {
  name: RegionName;
  slug: RegionSlug;
}

export const regions: RegionInfo[] = [
  { name: RegionName.GreaterAccra, slug: RegionSlug.GreaterAccra },
  { name: RegionName.Ashanti, slug: RegionSlug.Ashanti },
  { name: RegionName.Western, slug: RegionSlug.Western },
  { name: RegionName.WesternNorth, slug: RegionSlug.WesternNorth },
  { name: RegionName.Central, slug: RegionSlug.Central },
  { name: RegionName.Eastern, slug: RegionSlug.Eastern },
  { name: RegionName.Volta, slug: RegionSlug.Volta },
  { name: RegionName.Oti, slug: RegionSlug.Oti },
  { name: RegionName.Northern, slug: RegionSlug.Northern },
  { name: RegionName.Savannah, slug: RegionSlug.Savannah },
  { name: RegionName.NorthEast, slug: RegionSlug.NorthEast },
  { name: RegionName.UpperEast, slug: RegionSlug.UpperEast },
  { name: RegionName.UpperWest, slug: RegionSlug.UpperWest },
  { name: RegionName.Bono, slug: RegionSlug.Bono },
  { name: RegionName.BonoEast, slug: RegionSlug.BonoEast },
  { name: RegionName.Ahafo, slug: RegionSlug.Ahafo },
];
