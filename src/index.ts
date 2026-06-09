export type MarketplaceLocationGTag = readonly ['g', string]

export type MarketplaceCoordinates = {
  lat: number
  lng: number
}

export namespace GeoJSON {
  export type Position = number[]

  export type Polygon = {
    type: 'Polygon'
    coordinates: Position[][]
    bbox?: number[]
  }

  export type MultiPolygon = {
    type: 'MultiPolygon'
    coordinates: Position[][][]
    bbox?: number[]
  }
}

export type AddressToCoordinates = (address: string) => Promise<MarketplaceCoordinates>

export type AreaToPolygon = (area: string) => Promise<GeoJSON.Polygon | GeoJSON.MultiPolygon>

export interface MarketplaceLocationProvider {
  hierarchyForAddress(address: string): Promise<MarketplaceLocationGTag[]>
  coverArea(area: string): Promise<MarketplaceLocationGTag[]>
}

export function gTags(cells: Iterable<string>): MarketplaceLocationGTag[] {
  return [...new Set(cells)].map(cell => ['g', cell] as const)
}
