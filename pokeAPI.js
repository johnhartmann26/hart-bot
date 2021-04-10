const fetch = require("node-fetch");

let dex = []
function logDex() {
    console.log(dex)
}

async function fetchDex(id, logDex) { 
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const pokemon = await response.json()
    return pokemon
}

for (let i = 1; i < 152; i++) {
    fetchDex(i).then(pokemon => {
        let pokedexEntry = {
            name: pokemon.forms[0].name,
            dexID: pokemon.id
        }
        dex.push(pokedexEntry)
        dex.sort((a, b) => {
            return a.dexID - b.dexID;
        });
    })
}


// need to figure out a way to run code after this for loop... some await probably?