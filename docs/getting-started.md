# Getting started with the Marketplace Location Interface

`@sudonym-btc/marketplace-location-interface` defines the provider shape used by
marketplace packages that need address lookup, area lookup, and geospatial tag
generation without depending on a concrete geocoder or H3 implementation.

## Install

```sh
npm install @sudonym-btc/marketplace-location-interface
```

## Implement a provider

Provider packages expose a small surface that can turn user-facing location
inputs into marketplace-ready location tags.

```ts
import type { MarketplaceLocationProvider } from '@sudonym-btc/marketplace-location-interface'

export const provider: MarketplaceLocationProvider = {
  async tagsForListingLocation(location) {
    return [['g', '...']]
  },
}
```

Use this package for shared contracts only. Concrete geocoding, polygon
resolution, and H3 cell generation belong in implementation packages such as
`@sudonym-btc/marketplace-location-h3`.

Read the generated [API reference](reference/README.md) for the exported
provider and location types.
