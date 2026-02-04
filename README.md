# ghana-locations

Ghana's 16 regions and their cities/towns as structured data, with validation helpers and TypeScript support.

## Features

- **16 Regions:** All current administrative regions of Ghana.
- **Cities & Towns:** Comprehensive list of major cities and district capitals.
- **Validation:** Built-in validation functions and optional integrations for `zod` and `class-validator`.
- **TypeScript:** First-class TypeScript support with full type definitions.
- **Zero Dependencies:** Pure data and utility functions (at runtime).
- **Dual Export:** Supports both ESM and CommonJS.

## Installation

```bash
npm install ghana-locations
```

## Usage

### Basic Usage

```typescript
import { 
  getRegions, 
  getCities, 
  isValidRegion, 
  RegionName 
} from 'ghana-locations';

// Get all regions
const regions = getRegions();

// Get cities for a specific region
const accraCities = getCities(RegionName.GreaterAccra);

// Validate a region
const isValid = isValidRegion('Greater Accra'); // true
```

### Search and Reverse Lookup

```typescript
import { searchCities, findRegionByCity } from 'ghana-locations';

// Search for cities (case-insensitive)
const results = searchCities('accra');
// [{ region: "Greater Accra", city: "Accra" }]

// Find which region a city belongs to
const region = findRegionByCity('Kumasi');
// { name: "Ashanti", slug: "ashanti", cities: [...] }
```

### Validation Integrations

#### Zod

```typescript
import { ghanaRegionSchema, ghanaLocationSchema } from 'ghana-locations/zod';

ghanaRegionSchema.parse('Ashanti'); // OK
ghanaLocationSchema.parse({ region: 'Ashanti', city: 'Kumasi' }); // OK
```

#### class-validator

```typescript
import { IsGhanaRegion, IsGhanaCity } from 'ghana-locations/class-validator';

class CreateAddressDto {
  @IsGhanaRegion()
  region: string;

  @IsGhanaCity('region')
  city: string;
}
```

## API Reference

### Constants
- `RegionName`: Enum of all 16 region names.
- `RegionSlug`: Enum of all 16 region slugs.
- `citiesByRegion`: Map of region name to an array of cities.
- `regions`: Array of all 16 region objects (name, slug, cities).

### Functions
- `getRegions()`: Returns all regions.
- `getCities(region)`: Returns cities for a region (accepts name or slug).
- `getRegion(identifier)`: Get a single region by name or slug.
- `isValidRegion(value)`: Check if a string is a valid region name or slug.
- `isValidCity(region, city)`: Check if a city belongs to a region.
- `isValidLocation({ region, city })`: Validate a full location object.
- `findRegionByCity(city)`: Find which region a city belongs to.
- `searchCities(query)`: Case-insensitive search across all cities.

## License

MIT