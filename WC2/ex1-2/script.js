"use strict";

import Team from './teams.js'

let list = [];
let pokemons = [];
let myPoke = [];
let add = document.getElementsByClassName("addTeam");

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
    let main = document.getElementById('main')
    let htmlString = ""

    pokemons.sort(function (a, b) {
        return a.id - b.id;
    })

    pokemons.forEach(poke => {
        htmlString += `<div class="pokemon">
                            <img src="${poke.sprites.front_default}" alt="${poke.name}"
                                width="150px">
                            <p class="number">Number ${poke.id}</p>
                            <h2>${poke.name}</h2>
                            <div class="types">`
        for (let i = 0; i < poke.types.length; i++) {
            htmlString += ` <p class="${poke.types[i].type.name}">${poke.types[i].type.name}</p>`
        }
        htmlString += `     </div>
                            <button class="addTeam" name="${poke.name}">Add to team</button>
                        </div>`

    })
    main.innerHTML = htmlString

    for (let i = 0; i < add.length; i++) {
        add[i].addEventListener('click', function () {
            if (myPoke.length == 5) {
                console.log('Teamlimit reached');
            } else {
                myPoke.push(add[i].name);
                console.log(myPoke);

                let team1 = new Team("Poki", "Britt", myPoke);
                team1.describe();
            }

        });
    }

};