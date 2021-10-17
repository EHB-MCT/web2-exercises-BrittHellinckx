"use strict"

let runtime = 0;
let movies = [];
let more = document.getElementsByClassName("more");

window.onload = function () {
    document.getElementById('searchform').addEventListener('submit', e => {
        e.preventDefault();
        let input = document.getElementById('inputTitle').value;
        searchMovie(input);
    })
}
//Fetching all movies related to search
async function searchMovie(movie) {
    fetch(`http://www.omdbapi.com/?s=${movie}&apikey=ad3250db`)
        .then(response => response.json())
        .then(function (data) {
            //Adding all movies to screen
            let movieCard = document.getElementById('movieCard');
            let movieMessage = "";

            data.Search.forEach(movies => {
                movieMessage += `<div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${movies.Poster}" class="card-img" alt="${movies.Title}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${movies.Title}</h5>
                            <p class="card-text">${movies.Year}</p>
                            <p class="card-text">${movies.Type}</p>
                            <button class="more"class="btn btn-primary mb-2" name="${movie}" value="${movies.Title}">Read more</button>
                        </div>
                    </div>
                </div>
            </div>`
            });
            movieCard.innerHTML = movieMessage;
        })

    //Waiting until button is loaded
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });
    let result = await promise;
    console.log(result)
    specificMovie();
}

//checking which button is pressed
function specificMovie() {
    for (let i = 0; i < more.length; i++) {
        more[i].addEventListener('click', function () {
            let specificTitle = more[i].value;
            let allTitle = more[i].name
            searchMovie2(specificTitle, allTitle);
        })
    }
}
//Fetching selected movie
async function searchMovie2(sTitle, aTitle) {
    fetch(`http://www.omdbapi.com/?t=${sTitle}&apikey=ad3250db`)
        .then(response => response.json())
        .then(function (data) {
            let movieCard = document.getElementById('movieCard');
            //movieCard.innerHTML = "";
            let movieMessage = ""

            movieMessage = `
             <div class="card mb-3" style="max-width: 540px;">
                 <div class="row no-gutters">
                     <div class="col-md-4">
                         <img src="${data.Poster}" class="card-img" alt="${data.Title}">
                     </div>
                     <div class="col-md-8">
                         <div class="card-body">
                             <h5 class="card-title">${data.Title}</h5>
                             <p class="card-text">${data.Released}.</p>
                             <p class="card-text">${data.Runtime}.</p>
                             <p class="card-text">${data.Plot}.</p>
                             <button id="add"class="btn btn-primary mb-2" value="${data.Runtime}">Add movie runtime</button>
                             <button id="back"class="btn btn-primary mb-2" value="${aTitle}">Back to all movies</button>
                         </div>
                     </div>
                 </div>
             </div>`


            movieCard.innerHTML = movieMessage;
            //movieCard.insertAdjacentHTML("afterbegin", movieMessage);
        })

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });
    let result = await promise;
    console.log(result)
    movieCount();
    back()
}

function movieCount() {
    document.getElementById('add').addEventListener('click', e => {
        e.preventDefault();
        let num = parseInt(document.getElementById('add').value);
        runtime += num;
        document.getElementById('timerCard').innerHTML = `Your total watchtime is ${runtime} minutes`;
    })
}

function back() {
    document.getElementById('back').addEventListener('click', e => {
        e.preventDefault();
        searchMovie(document.getElementById('back').value);
    })
}