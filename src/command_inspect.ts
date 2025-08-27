
import { State } from "./state.js";

export async function commandInspect(state: State, pokemon: string) {

    if(pokemon === undefined) {
        console.log("Please enter a pokemon name to inspect a pokemon");
        return;
    }

    const pokemonData = state.pokedex?.[pokemon];

    if(!pokemonData) {
        console.log(`You have not caught ${pokemon} yet`);
        return;
    }

    const pokemonHeightInMeters = pokemonData.height / 10;

    console.log();
    console.log(`Name: ${pokemonData.name}`);
    console.log(`Height: ${pokemonHeightInMeters >= 1 ? pokemonHeightInMeters + " m" : (pokemonHeightInMeters * 100) + " cm"}`);
    console.log(`Weight: ${pokemonData.weight / 10} kg`); 
    console.log(`Stats:`);
    pokemonData.stats.forEach(stat => console.log(` -${stat.stat.name}: ${stat.base_stat}`));
    console.log("Types:");
    pokemonData.types.forEach(type => console.log(` -${type.type.name}`));
}
