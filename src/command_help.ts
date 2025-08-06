import { CLICommand } from "./commandType.js";

export function commandHelp(commands: Record<string, CLICommand>) {
    console.log();
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n");
    const commandObjects = Object.values(commands);
    for(let command of commandObjects) {
        console.log(`${command.name}: ${command.description}`);
    }
}