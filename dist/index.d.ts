export type MarketplaceLocationGTag = readonly ['g', string];
export type MarketplaceCoordinates = {
    lat: number;
    lng: number;
};
export declare namespace GeoJSON {
    type Position = number[];
    type Polygon = {
        type: 'Polygon';
        coordinates: Position[][];
        bbox?: number[];
    };
    type MultiPolygon = {
        type: 'MultiPolygon';
        coordinates: Position[][][];
        bbox?: number[];
    };
}
export type AddressToCoordinates = (address: string) => Promise<MarketplaceCoordinates>;
export type AreaToPolygon = (area: string) => Promise<GeoJSON.Polygon | GeoJSON.MultiPolygon>;
export interface MarketplaceLocationProvider {
    hierarchyForAddress(address: string): Promise<MarketplaceLocationGTag[]>;
    coverArea(area: string): Promise<MarketplaceLocationGTag[]>;
}
export declare function gTags(cells: Iterable<string>): MarketplaceLocationGTag[];
//# sourceMappingURL=index.d.ts.map