
import { cleanInput } from "./repl"

import { describe, expect, test } from "vitest";

describe.each([
    {
        input: " hello  world  ",
        expected: ["hello", "world"]
    },
    {
        input: " HOW aRe yOU     ",
        expected: ["how", "are", "you"]
    },
    {
        input: "Pika  ",
        expected: ["pika"]
    }
])('cleanInput', ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    const actual = cleanInput(input);

    //expect(actual).toBe(expected); >two arrays
    expect(actual).toHaveLength(expected.length);

    for(let i in expected){
        expect(actual[i]).toBe(expected[i])
    }
  })
})

