"use strict";

import Team from './teams.js'

let list = [];
let pokemons = [];
let team1 = '';
let team2 = '';
let team3 = '';
let message = document.getElementById('message');
let team = document.getElementById('team');
let add = document.getElementsByClassName("addTeam");

//////////////////////////////////////////////////////////////////////////////////Fetch pokemon
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

//////////////////////////////////////////////////////////////////////////////////Displaying pokemon
function buildlist() {
    let main = document.getElementById('main')
    let htmlString = ""
    ////Sorting pokemon bij number
    pokemons.sort(function (a, b) {
        return a.id - b.id;
    })
    ////Adding pokemon to HTML
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

    //////////////////////////////////////////////////////////////////////////////Making a new team & adding pokemon
    document.getElementById('newTeam').addEventListener('submit', event => {
        event.preventDefault();
        ////team one
        if (team1 == '') {
            let myPoke1 = [];
            let teamName1 = document.getElementById('teamName').value;
            let trainerName1 = document.getElementById('trainerName').value;

            message.innerHTML = `${teamName1} was created`;

            for (let i = 0; i < add.length; i++) {
                add[i].addEventListener('click', function () {
                    if (myPoke1.length == 6) {
                        message.innerHTML = 'The roster is full';
                    } else if (myPoke1.includes(add[i].name)) {
                        message.innerHTML = `${add[i].name} was already added`;
                    } else {
                        message.innerHTML = `${add[i].name} has been succesfully added`;
                        myPoke1.push(add[i].name);
                        team1 = new Team(teamName1, trainerName1, myPoke1);
                        team1.describe();
                    }
                });
            }

        }
        ////team 2
        else if (team2 == '') {
            let myPoke2 = [];
            let teamName2 = document.getElementById('teamName').value;
            let trainerName2 = document.getElementById('trainerName').value;

            message.innerHTML = `${teamName2}was created`;
            team.innerHTML = '';

            for (let i = 0; i < add.length; i++) {
                add[i].addEventListener('click', function () {
                    if (myPoke2.length == 6) {
                        message.innerHTML = 'The roster is full';
                    } else if (myPoke2.includes(add[i].name)) {
                        message.innerHTML = `${add[i].name} was already added`;
                    } else {
                        message.innerHTML = `${add[i].name} has been succesfully added`;
                        myPoke2.push(add[i].name);
                        team2 = new Team(teamName2, trainerName2, myPoke2);
                        team2.describe();
                    }
                });
            }
        }
        ////team 3
        else if (team3 == '') {
            let myPoke3 = [];
            let teamName3 = document.getElementById('teamName').value;
            let trainerName3 = document.getElementById('trainerName').value;

            message.innerHTML = `${teamName3}was created`;
            team.innerHTML = '';

            for (let i = 0; i < add.length; i++) {
                add[i].addEventListener('click', function () {
                    if (myPoke3.length == 6) {
                        message.innerHTML = 'The roster is full';
                    } else if (myPoke3.includes(add[i].name)) {
                        message.innerHTML = `${add[i].name} was already added`;
                    } else {
                        message.innerHTML = `${add[i].name} has been succesfully added`;
                        myPoke3.push(add[i].name);
                        team3 = new Team(teamName3, trainerName3, myPoke3);
                        team3.describe();
                    }
                });
            }
        }
        ////Too many teams
        else {
            message.innerHTML = 'Too many teams';
        }
    })
};