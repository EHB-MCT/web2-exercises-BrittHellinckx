"Use strict";

/* 
window.onload = console.log("The page is fully loaded");

const order = {
    initFields() {
        document.getElementById('form').addEventListener("submit", this.submitHandler);
    },
    submitHandler(e) {
        e.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let input = document.getElementById('input').value;

        console.log(name, email, input);

        order.getOrder(name, email, input);
    },
    getOrder(name, email, input) {
        console.log(document.getElementById('message'));
        document.getElementById('message').innerHTML = `${name} ordered ${input} and will receive an email via ${email}`
    }
}*/


window.onload = function () {
    console.log("The page is fully loaded");

    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault();

        //get values of input fields
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let order = document.getElementById('order').value;

        console.log(name, email, order);

        //print on screen
        document.getElementById('message').innerHTML =
            `The order for the customer ${name}  
            is the following: ${order}. 
            The customer may be notified by email: ${email}`
    });
}