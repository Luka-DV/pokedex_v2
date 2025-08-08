
export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2/";

    constructor() {
        
    }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
      try {
          const response = await fetch(PokeAPI.baseURL + pageURL);
          if(!response.ok) {
              throw new Error(`Response status: ${response.status}`);
          }

          const data  = await response.json();
          return data;

        } catch (err) {
            throw err;
        }
    }

    /* async fetchLocation(locationName: string): Promise<Location> {

    } */
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