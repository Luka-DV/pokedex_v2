import { State } from "./state.js";


export async function commandExplore(state: State, locationNameOrId: string | number) {

    const { pokeAPI } = state;

    if(isNaN(Number(locationNameOrId))) {
        console.log(`Exploring location "${locationNameOrId}"`);
    } else {
        console.log(`Exploring location with id "${locationNameOrId}"`)
    }

    try {
        const data = await pokeAPI.fetchLocation(locationNameOrId);

        console.log("Found Pokemon:");

        for(let pokemonEncounter of data.pokemon_encounters) {
            console.log(`- ${pokemonEncounter.pokemon.name}`);
        }

    } catch (error) {
        console.log(`Sorry, the given location ${ isNaN(Number(locationNameOrId))? '"' + locationNameOrId : 'with id "' + locationNameOrId}" was not found `);
    }
}