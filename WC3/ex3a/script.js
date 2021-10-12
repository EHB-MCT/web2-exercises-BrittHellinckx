"use strict"

let pcNumber = '';

window.onload = function () {
    generateNumber();

    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault();

        let number = document.getElementById('number').value;
        compareNumber(number).then(
            result => {
                document.getElementById('message').innerHTML = result
            },
            error => {
                document.getElementById('message').innerHTML = error
            }
        );
    });
}


function compareNumber(nr) {
    return new Promise(function (resolve, reject) {
        if (nr < 21 && nr > -1) {
            if (pcNumber == nr) {
                resolve("You've guessed it right. Try again?")
                generateNumber();
            } else if (pcNumber < nr) {
                reject("The number is lower. Guess again")
            } else if (pcNumber > nr) {
                reject("The number is higher. Guess again")
            }
        } else {
            reject("Invalid number")
        }
    })
}

function generateNumber() {
    pcNumber = Math.floor(Math.random() * 21);
    return pcNumber;
}