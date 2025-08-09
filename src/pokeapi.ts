
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

    async fetchLocation(locationName: string): Promise<Location> {
      
      const resURL = `${PokeAPI.baseURL}/location/${locationName}/`
      try {
        const res = await fetch(resURL);
        if(!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }
        
        const data = await res.json();
        return data;

      } catch (err) {
          throw err;        
      }

    }
}

export type ShallowLocations = {
  count: number
  next: string
  previous: any
  results: Result[]

}
export type Result = {
  name: string
  url: string
}



export interface Location {
  areas: Area[]
  game_indices: Index[]
  id: number
  name: string
  names: Name[]
  region: Region
}

export interface Area {
  name: string
  url: string
}

export interface Index {
  game_index: number
  generation: Generation
}

export interface Generation {
  name: string
  url: string
}

export interface Name {
  language: Language
  name: string
}

export interface Language {
  name: string
  url: string
}

export interface Region {
  name: string
  url: string
}
