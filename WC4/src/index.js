import Cleave from 'cleave.js';
require('cleave.js/dist/addons/cleave-phone.be');

var n = new Cleave('.my-name', {
    prefix: 'STUDENT-'
});

var d = new Cleave('.my-date', {
    date: true,
    datePattern: ['d', 'm', 'Y']
});

var r = new Cleave('.my-RRN', {
    blocks: [2, 2, 2, 3, 2],
    delimiters: ['.', '.', '-', '.']
});

var a = new Cleave('.my-age', {
    numeral: true,
    numeralPositiveOnly: true
});

var p = new Cleave('.my-phone', {
    phone: true,
    phoneRegionCode: 'Be'
});

document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault()

    let name = document.getElementsByClassName("my-name")[0].value;
    let date = document.getElementsByClassName("my-date")[0].value;
    let RRN = document.getElementsByClassName("my-RRN")[0].value;
    let age = document.getElementsByClassName("my-age")[0].value;
    let phone = document.getElementsByClassName("my-phone")[0].value;

    let htmlString = `
    <h3>${name} was born on ${date} and is ${age}.
    <br>
    The government knows them as ${RRN}.
    <br>
    You can contact them at ${phone}`

    document.getElementById("content").innerHTML = htmlString
})