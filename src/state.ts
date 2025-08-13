import { createInterface, type Interface } from "node:readline";
import { getCommands } from "./commands_all.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
    
    //callback: (commands: Record<string, CLICommand>) => void;
};

export type State = {
    rl: Interface,
    commandsRegistry: Record<string, CLICommand>,
    pokeAPI: PokeAPI,
    nextLocationsURL: string | null,
    prevLocationsURL: string | null
}

export function initState(cacheDuration: number): State {
    return {
        rl: createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "Pokedex >"
            }),
        commandsRegistry: getCommands(),
        pokeAPI: new PokeAPI(cacheDuration),
        nextLocationsURL: null,
        prevLocationsURL: null
    }
}