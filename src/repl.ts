
import { State } from "./state.js";

export function cleanInput(input: string): string[] {
    const splitLowercaseTrim = input
        .split(" ")
        .filter(word => word)
        .map(word => word.toLowerCase())
    
    return splitLowercaseTrim;
}

export function startREPL(state: State) {
 /*    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex >"
    }); */

    const {rl, commandsRegistry } = state;

    rl.prompt();

    rl.on('line', async (line) => {
        const textArray = cleanInput(line);
        const command = textArray[0];
        if(!command) {
            rl.prompt();
            return;
        }
        //console.log(`Your command was: ${command[0]}`);

        if(command in commandsRegistry) {
            try {
                await commandsRegistry[command].callback(state);
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log(`Unknown command: "${command}". Type "help" for a list of commands.`);
        }

        console.log();
        rl.prompt();
    });
}

