
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

    async fetchLocation(locationNameOrId: string | number): Promise<LocationRoot> {
      const resURL = `${PokeAPI.baseURL}/location-area/${locationNameOrId}/` //fix thsi - diff url than in the off solution!
      const cachedData = this.cache.get<LocationRoot>(resURL)

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

        this.cache.add<LocationRoot>(resURL, data);

        return data;

      } catch (err) {
          throw new Error(`Error fetching locations: ${(err as Error).message}`);
      }

    }

    stopCacheLoop() {
      this.cache.stopReapLoop();
    }
}

//batch of locations
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


//single location
export interface LocationRoot {
  encounter_method_rates: EncounterMethodRate[]
  game_index: number
  id: number
  location: Location
  name: string
  names: Name[]
  pokemon_encounters: PokemonEncounter[]
}

export interface EncounterMethodRate {
  encounter_method: EncounterMethod
  version_details: VersionDetail[]
}

export interface EncounterMethod {
  name: string
  url: string
}

export interface VersionDetail {
  rate: number
  version: Version
}

export interface Version {
  name: string
  url: string
}

export interface Location {
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

export interface PokemonEncounter {
  pokemon: Pokemon
  version_details: VersionDetail2[]
}

export interface Pokemon {
  name: string
  url: string
}

export interface VersionDetail2 {
  encounter_details: EncounterDetail[]
  max_chance: number
  version: Version2
}

export interface EncounterDetail {
  chance: number
  condition_values: any[]
  max_level: number
  method: Method
  min_level: number
}

export interface Method {
  name: string
  url: string
}

export interface Version2 {
  name: string
  url: string
}
