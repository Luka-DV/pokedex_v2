import { State } from "./state.js";

export function commandExit(state: State) {
    console.log("Closing the Pokedex... Goodbye!");
    const { rl } = state;
    rl.close();
    process.exit(0);
}