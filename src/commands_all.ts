import { CLICommand } from "./state.js"

import { commandExit } from "./command_exit.js"
import { commandHelp } from "./command_help.js"
import { commandMap } from "./command_map.js"

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
            description: "Displays the names of 20 location areas in the Pokemon world",
            callback: commandMap
        }
    }
}
 