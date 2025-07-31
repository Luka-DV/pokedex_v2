
export function cleanInput(input: string): string[] {
    const splitLowercaseTrim = input
        .split(" ")
        .filter(word => word)
        .map(word => word.toLowerCase())
    
    return splitLowercaseTrim;
}

 