"use strict"

//https://picsum.photos/200/300
//http://www.thecolorapi.com/id?format=svg&hex=24D7D0

window.onload = function () {
    document.getElementById('searchform').addEventListener('submit', e => {
        e.preventDefault();
        let randomNumber = Math.floor(Math.random() * 50);
        fetching(randomNumber);
    })
    document.getElementById('searchform2').addEventListener('submit', e => {
        e.preventDefault();
        let randomColour = Math.floor(Math.random() * 0xffffff).toString(16);
        fetching2(randomColour);
    })
}
async function fetching(number) {
    fetch(`https://picsum.photos/id/${number}/info`)
        .then(response => response.json())
        .then(function (data) {
            console.log(data)
            document.getElementById('photo').innerHTML = `<img src="${data.download_url}" alt="random" width="600">`
        })
}

//Lorempicsum API
////https://picsum.photos/width/height          To get one image with that width and hight
////https://picsum.photos/id/0/info             To get all the info about the picture
////https://picsum.photos/v2/list               To get multiplue pictures
////?grayscale&blur or ?blur and ?grayscale     Adding grayscale and/or blur

async function fetching2(colour) {
    document.getElementById('colour').innerHTML = `<img src="http://www.thecolorapi.com/id?format=svg&hex=${colour}">`

    //fetch(`https://www.thecolorapi.com/id?format=svg&hex=${colour}`)
        //.then(response => response.json())
        //.then(data => console.log(data))
}

//The color API
////De url bevat geen echte data om een fetch request te doen