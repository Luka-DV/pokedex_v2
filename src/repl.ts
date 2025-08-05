import { createInterface } from "node:readline";
import { CLICommand } from "./commandType.js";
import { commandExit } from "./command_exit";

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
            allCommands[command].callback(allCommands)
        } else {
            console.log("Unknown command");
        }

        //read boots again and continuer, you are on the right track: the callback method always needs the commands passed in because of the command type


        rl.prompt()
    });
}

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit
        },

    }
}
 