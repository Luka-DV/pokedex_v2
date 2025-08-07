import { createInterface, type Interface } from "node:readline";
import { getCommands } from "./commands_all.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => void;
    //callback: (commands: Record<string, CLICommand>) => void;
};

export type State = {
    rl: Interface,
    commandsRegistry: Record<string, CLICommand>
}

export function initState(): State {
    return {
        rl: createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "Pokedex >"
            }),
        commandsRegistry: getCommands()
    }
}