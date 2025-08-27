# Pokemon REPL

A command-line interface for exploring Pokemon locations using the PokeAPI, built with Node.js and TypeScript.

## Features

- **Interactive REPL**: Navigate through Pokemon locations with simple commands
- **Intelligent Caching**: Responses are cached to improve performance and reduce API calls
- **Location Exploration**: Browse through different Pokemon location areas
- **Pokemon Discovery**: Find Pokemon in specific locations

## Commands

- `help` - Display available commands
- `exit` - Exit the application
- `map` - Show next 20 locations
- `mapb` - Show previous 20 locations
- `explore <location-name or id>` - Explore a specific location to find Pokemon
- `catch <pokemon-name>` - Attempt to catch a Pokemon

## Installation

1. Clone the repository
2. Install dependencies:
    npm install
3. Build the project:
    npm run build
4. Run the application:
    npm start

## Technical Details

- Language: TypeScript
- Runtime: Node.js
- API: [pokeapi](https://pokeapi.co/docs/v2)
- Caching: Custom cache implementation with configurable TTL
- Architecture: Modular design with separate classes for API handling, caching, and state management

## Project Structure

    pokeapi.ts - API service layer with built-in cache
    pokecache.ts - Cache implementation
    state.ts - Application state management
    commands/ - Individual command implementations

## Example Usage

Pokedex >map
1 canalave-city-area
2 eterna-city-area
3 pastoria-city-area
...

Pokedex >explore 9
Exploring location with id "9"
Found Pokemon:
- caterpie
- metapod
- weedle
...

Pokedex >catch caterpie
Throwing a Pokeball at caterpie...
caterpie was caught!
You may now inspect it with the inspect command.

Pokedex >inspect caterpie

Name: caterpie
Height: 30 cm
Weight: 2.9 kg
Stats:
...


