"use strict"

window.onload = function () {
    console.log("The page is fully loaded");

//Submit
    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault();

        //get values of input fields
        let order = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            input: document.getElementById('input').value, //blijft zelfde
            printOrder: function () {
                document.getElementById('message').innerHTML =
                    `The order for the customer ${this.name}  
                        is the following: ${this.input}. 
                        The customer may be notified by email: ${this.email}`
            }
        }
        //print on screen
        order.printOrder();
    });

//calculate
    document.getElementById('form').addEventListener('reset', event => {
        event.preventDefault();

        //get price
        let order = {
            price: 0,
            calculatePrice: function () {
                this.price += dishes.price;
                document.getElementById('price').innerHTML = this.price
            }
        }
        //Calculate price
        dishes.forEach(order.calculatePrice);
    });

//ex 6
    let dishes = [];
    dishes.push({
        id: '1',
        name: 'Burger and french fries',
        price: 18,
    });
    dishes.push({
        id: '2',
        name: 'Pizza',
        price: 12
    });
    dishes.push({
        id: '3',
        name: 'Noodles',
        price: 10
    });
    dishes.push({
        id: '4',
        name: 'Soup',
        price: 5
    });
    dishes.push({
        id: '5',
        name: 'Rice with chicken',
        price: 12
    });
    let selection = document.getElementById('select');
    for (let i = 0; i < dishes.length; i++) {
        let input = document.createElement("input");
        input.type = "checkbox";
        input.value = dishes[i].name;
        input.id = "input";
        selection.appendChild(input);

        let label = document.createElement("label");
        label.for = dishes[i].id;
        label.innerHTML = `${dishes[i].name} <br>`;
        selection.appendChild(label);
    }

}