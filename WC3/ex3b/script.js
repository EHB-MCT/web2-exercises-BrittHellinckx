"use strict"

let runtime = 0;
let movies = [];

window.onload = function () {
    document.getElementById('searchform').addEventListener('submit', e => {
        e.preventDefault();
        let input = document.getElementById('inputTitle').value;
        searchMovie(input);
    })
}
//First fetch:http://www.omdbapi.com/?s=${movie}&apikey=ad3250db
////Getting all movies relating to that title
//////Second fetch http://www.omdbapi.com/?t=${movie}&apikey=ad3250db`
////////Getting specific movie
async function searchMovie(movie) {
    fetch(`http://www.omdbapi.com/?t=${movie}&apikey=ad3250db`)
        .then(response => response.json())
        .then(function (data) {
            console.log(data);
            let movieCard = document.getElementById('movieCard');
            movieCard.innerHTML = "";

            let movieMessage = `
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
                        </div>
                    </div>
                </div>
            </div>`
            movieCard.insertAdjacentHTML("afterbegin", movieMessage);
        })

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });
    let result = await promise;
    console.log(result)
    movieCount();
}

function movieCount() {
    document.getElementById('add').addEventListener('click', e => {
        e.preventDefault();
        let num = parseInt(document.getElementById('add').value);
        runtime += num;
        document.getElementById('timerCard').innerHTML = `Your total watchtime is ${runtime} minutes`;
    })
}