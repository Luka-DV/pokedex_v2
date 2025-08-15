import { CLICommand } from "./state.js"

import { commandExit } from "./command_exit.js"
import { commandHelp } from "./command_help.js"
import { commandMap } from "./command_map.js"
import { commandMapB } from "./command_mapb.js"
import { commandExplore } from "./command_explore.js"
import { commandCatch } from "./command_catch.js"

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp        
        },
        map: {
            name: "map",
            description: "Displays the names the next 20 location areas in the Pokemon world",
            callback: commandMap
        },
        mapb: {
            name: "mapb",
            description: "Displays the names of the previous 20 location areas in the Pokemon world",
            callback: commandMapB
        },
        explore: {
            name: "explore",
            description: "Find the pokemon that are in the given area",
            callback: commandExplore
        },
        catch: {
            name: "catch",
            description: "Try to catch a pokemon",
            callback: commandCatch
        }
    }
}
 