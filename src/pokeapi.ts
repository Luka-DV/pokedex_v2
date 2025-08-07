
export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2/";

    constructor() {
        
    }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {

    }

    async fetchLocation(locationName: string): Promise<Location> {

    }
}

export type ShallowLocations = {
  count: number
  next: string
  previous: any
  results: Location[]

}

export type Location = {
  name: string
  url: string
}