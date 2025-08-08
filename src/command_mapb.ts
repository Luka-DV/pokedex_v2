import { State } from "./state.js"

export async function commandMapB(state: State) {
    //const url = "https://pokeapi.co/api/v2/location-area"
    const { pokeAPI } = state; 
    let pageURL = "location-area/";

    if(state.prevLocationsURL) {
        const prevLoc = state.prevLocationsURL.split("/").at(-1); 
        if(typeof prevLoc === "string") {
            pageURL += prevLoc;
        } else {
            throw new Error("incorrect value at previous Locaton URL");
        }
    } else {
        console.log("You're on the first page");
        return;
    }

    try {    
        const data  = await pokeAPI.fetchLocations(pageURL);
        
        state.nextLocationsURL = data.next;
        state.prevLocationsURL = data.previous;

        const locationsArr = data.results;

        for(let location of locationsArr) {
            const locNum = location.url.split("/").at(-2);
            console.log(`${locNum} ${location.name}`);
        }
    } catch (err) {
        console.error(err);
    }
    
}