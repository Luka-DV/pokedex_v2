import { State } from "./state.js"

export function commandHelp(state: State) {
    const { commandsRegistry } = state;

    console.log();
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n");
    const commandObjects = Object.values(commandsRegistry);
    for(let command of commandObjects) {
        console.log(`${command.name}: ${command.description}`);
    }
}