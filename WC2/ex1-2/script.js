"use strict";

import Team from './teams.js'

let list = [];
let pokemons = [];
let myPoke1 = [];
let myPoke2 = [];
let myPoke3 = [];
let team1 = '';
let team2 = '';
let team3 = '';
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

    document.getElementById('newTeam').addEventListener('submit', event => {
        event.preventDefault();
        if (team1 == '') {
            let teamName1 = document.getElementById('teamName').value;
            let trainerName1 = document.getElementById('trainerName').value;

            console.log('team 1:', teamName1, trainerName1);

            for (let i = 0; i < add.length; i++) {
                add[i].addEventListener('click', function () {
                    if (myPoke1.length == 5) {
                        console.log('Teamlimit reached');
                    } else {
                        myPoke1.push(add[i].name);
                        team1 = new Team(teamName1, trainerName1, myPoke1);
                        team1.describe();
                    }
                });
            }

        } else if (team2 == '') {
            let teamName2 = document.getElementById('teamName').value;
            let trainerName2 = document.getElementById('trainerName').value;

            console.log('team 2:', teamName2, trainerName2);

            for (let i = 0; i < add.length; i++) {
                add[i].addEventListener('click', function () {
                    if (myPoke2.length == 5) {
                        console.log('Teamlimit reached');
                    } else {
                        myPoke2.push(add[i].name);
                        team2 = new Team(teamName2, trainerName2, myPoke2);
                        team2.describe();
                    }
                });
            }
        } else if (team3 == '') {
            let teamName3 = document.getElementById('teamName').value;
            let trainerName3 = document.getElementById('trainerName').value;

            console.log('team 3:', teamName3, trainerName3);
            for (let i = 0; i < add.length; i++) {
                add[i].addEventListener('click', function () {
                    if (myPoke3.length == 5) {
                        console.log('Teamlimit reached');
                    } else {
                        myPoke3.push(add[i].name);
                        team3 = new Team(teamName3, trainerName3, myPoke3);
                        team3.describe();
                    }
                });
            }
        } else {
            console.log('Too many teams');
        }
    })

};