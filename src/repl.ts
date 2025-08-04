import { createInterface } from "node:readline";

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
        const text = cleanInput(line);
        if(text.length === 0) {
            rl.prompt();
            return;
        }
        console.log(`Your command was: ${text[0]}`);
        rl.prompt()
    });
}
 