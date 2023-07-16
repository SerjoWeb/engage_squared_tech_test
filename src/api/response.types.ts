export interface AdditionalProperties {
  $type: string;
  category: string;
  key: string;
  sourceSystemKey: string;
  value: string;
  modified: string;
}

export interface Response {
  $type: string;
  id: string;
  url: string;
  commonName: string;
  placeType: string;
  additionalProperties: AdditionalProperties[];
  children: unknown[];
  childrenUrls: unknown[];
  lat: number;
  lon: number;
}
