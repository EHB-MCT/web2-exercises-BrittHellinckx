let list = [];
let pokemons = [];

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(resp => resp.json())
    .then(data => {
        list = data.results;
        //loop over every pokemon
        list.forEach(poke => {
            fetch(poke.url)
                .then(resp => resp.json())
                .then(pokeObject => {
                    pokemons.push(pokeObject)
                });
        });
    });

window.onload = function () {
    setTimeout(buildlist, 3000);
};

function buildlist() {
    console.log(pokemons);

    let main = document.getElementById('main')
    let htmlString = ""

    pokemons.forEach(poke => {
        htmlString += `<div class="pokemon">
            <img src="${poke.sprites.front_default}" alt="${poke.name}"
                width="150px">
            <p class="number">Number ${poke.id}</p>
            <h2>${poke.name}</h2>
            <div class="types">`
        for (let i = 0; i < poke.types.length; i++) {
            htmlString += `<p id="${poke.types[i].type.name}">${poke.types[i].type.name}</p>`
        }
        htmlString += ` </div><button>Add to team</button></div>`

    })
    main.innerHTML = htmlString
};