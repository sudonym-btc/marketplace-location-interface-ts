# Marketplace Location Interface

Shared TypeScript interfaces for NMDK marketplace location providers.

## Docs

Package-owned docs live in [`docs`](docs/README.md) and are published at
<https://sudonym-btc.github.io/marketplace-location-interface-ts/>. Start with
[`docs/getting-started.md`](docs/getting-started.md) and regenerate the API
reference with:

```sh
npm run docs:api
```

`nostr-tools/marketplace` imports this package for provider types only. Provider
packages such as `@sudonym-btc/marketplace-location-h3` own geospatial
libraries, upstream geocoders, and polygon resolvers.
