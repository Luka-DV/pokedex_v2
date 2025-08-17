
import { Pokemon } from "./pokeapi.js";
import { State } from "./state.js";

export async function commandCatch(state: State, pokemon: string) {

    const { pokeAPI } = state;

    try{
        const pokemonData = await pokeAPI.fetchPokemonData(pokemon);
        
        console.log(`Throwing a Pokeball at ${pokemon}...`);
        
        await new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                const wasPokemonCaught =  calcuateIfPokemonWasCaught(pokemonData);

                if(wasPokemonCaught) {
                    console.log(`${pokemon} was caught!`);
                    state.pokedex[pokemon] = pokemonData;
                } else {
                    console.log(`${pokemon} escaped!`);
                }

                resolve();
                }, 1000);
        }) 
    } catch(err) {
        console.log(`Sorry, the pokemon "${pokemon}" was not found`);
    }

}


function calcuateIfPokemonWasCaught(pokemonData: Pokemon) {

    const basePokemonExp = pokemonData.base_experience;
    const difficultyOfCatching = basePokemonExp/1000 + 0.30;

    const randomValue = Math.random();

    if(randomValue > difficultyOfCatching) {
        return true;
    }

    return false;

}