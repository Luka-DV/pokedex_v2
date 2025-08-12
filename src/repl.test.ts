
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


import { Cache } from "./pokecache.js";

test.concurrent.each([
  {
    key: "https://pokeapi.co/api/v2/location-area",
    val: "testdata",
    interval: 500, // 1/2 second
  },
  {
    key: "https://pokeapi.co/api/v2/location-area?offset=20&limit=20",
    val: "moretestdata",
    interval: 1000, // 1 second
  },
])("Test Caching $interval ms", async ({ key, val, interval }) => {
  const cache = new Cache(interval);

  cache.add(key, val);
  const cached = cache.get(key);
  expect(cached).toBe(val);

  await new Promise((resolve) => setTimeout(resolve, interval + 100));
  const reaped = cache.get(key);
  expect(reaped).toBe(undefined);

  cache.stopReapLoop();
});