import { State } from "./state.js"

export async function commandMap(state: State) {
    const url = "https://pokeapi.co/api/v2/location-area"

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data  = await response.json();
        const locationsArr = data.results;

        for(let location of locationsArr) {
            const locNum = location.url.split("/").at(-2);
            console.log(`${locNum} ${location.name}`);
        }
    } catch (err) {
        console.error(err)
    }
}