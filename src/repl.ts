import { createInterface } from "node:readline";
import { getCommands } from "./commands_all.js";

export function cleanInput(input: string): string[] {
    const splitLowercaseTrim = input
        .split(" ")
        .filter(word => word)
        .map(word => word.toLowerCase())
    
    return splitLowercaseTrim;
}

export function  startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex >"
    });

    rl.prompt();

    rl.on('line', (line) => {
        const textArray = cleanInput(line);
        const command = textArray[0];
        if(!command) {
            rl.prompt();
            return;
        }
        //console.log(`Your command was: ${command[0]}`);

        const allCommands = getCommands();

        if(command in allCommands) {
            try {
                allCommands[command].callback(allCommands);
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log(`Unknown command: "${command}". Type "help" for a list of commands.`);
        }

        rl.prompt()
    });
}

