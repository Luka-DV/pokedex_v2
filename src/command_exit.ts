import { State } from "./state.js";

export async function commandExit(state: State) {
    console.log("Closing the Pokedex... Goodbye!");
    const { rl, pokeAPI } = state;
    pokeAPI.stopCacheLoop();
    rl.close();
    process.exit(0);
}