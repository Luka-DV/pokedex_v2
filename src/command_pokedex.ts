import { State } from "./state.js";


export async function commandPokedex(state: State) {

    const pokemons = Object.keys(state.pokedex);

    console.log();
    console.log("Your Pokedex:");

    if(pokemons.length === 0) {
        console.log("You havent caught any pokemon yet.");
        return;
    }

    for(let pokemon of pokemons) {
        console.log(` - ${pokemon}`);
    }

}