
import { chai } from "vitest";
import { Cache } from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2/";

    private cache: Cache 

    constructor(cacheDuration: number) {
      this.cache = new Cache(cacheDuration);
    }


    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const url = PokeAPI.baseURL + pageURL;

        const cachedData = this.cache.get<ShallowLocations>(url)

        if(cachedData) {
          console.log("CACHE used");
          return cachedData;
        }

        try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data  = await response.json();

        this.cache.add<ShallowLocations>(url, data);

        return data;

      } catch (err) {
          throw new Error(`Error fetching locations: ${(err as Error).message}`);
      }
    }

    async fetchLocation(locationName: string): Promise<Location> {
      const resURL = `${PokeAPI.baseURL}/location/${locationName}/`

      const cachedData = this.cache.get<Location>(resURL)

      if(cachedData) {
        console.log("CACHE used");
        return cachedData;
      }

      try {
        const res = await fetch(resURL);
        if(!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }
        
        const data = await res.json();

        this.cache.add<Location>(resURL, data);

        return data;

      } catch (err) {
          throw new Error(`Error fetching locations: ${(err as Error).message}`);
      }

    }

    stopCacheLoop() {
      this.cache.stopReapLoop();
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
