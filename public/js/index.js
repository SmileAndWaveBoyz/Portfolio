console.log("Script is working");

//Form elements
const name = document.getElementById("NAME");
const email = document.getElementById("EMAIL");
const message = document.getElementById("MESSAGE");
const form = document.getElementById("form");

//Icons
const nameErrorIcon = document.getElementById("nameErrorIcon");
const emailErrorIcon = document.getElementById("emailErrorIcon");
const messageErrorIcon = document.getElementById("messageErrorIcon");

//Labels
const errorNameElement = document.getElementById("errorNameElement");
const errorEmailElement = document.getElementById("errorEmailElement");
const errorMessageElement = document.getElementById("errorMessageElement");

form.addEventListener("submit", function (e) {
    let nameErrorMessages = [];
    let emailErrorMessages = [];
    let messageErrorMessages = [];

    //Name errors
    if (name.value === "" || name.value == null) {
        nameErrorMessages.push("Name is required");
        name.classList.add("error");
        nameErrorIcon.classList.add("visable");
    }

    if (name.value.length > 100) {
        nameErrorMessages.push("Must be less than 100 characters");
        name.classList.add("error");
        nameErrorIcon.classList.add("visable");
    }

    if (nameErrorMessages.length > 0) {
        e.preventDefault();
        errorNameElement.innerText = nameErrorMessages.join(", ");
    }
    
    //Email errors
    if (email.value === "" || email.value == null) {
        emailErrorMessages.push("Email is required");
        email.classList.add("error");
        emailErrorIcon.classList.add("visable");
    }

    if (email.value.length >= 320) {
        emailErrorMessages.push("Must be less than 320 characters");
        email.classList.add("error");
        emailErrorIcon.classList.add("visable");
    }

    if (validateEmail(email.value) === false) {
        emailErrorMessages.push("Sorry, invalid format here");
        email.classList.add("error");
        emailErrorIcon.classList.add("visable");
    }

    if (emailErrorMessages.length > 0) {
        e.preventDefault();
        errorEmailElement.innerText = emailErrorMessages.join(", ");
    }
    
    //Message errors
    if (message.value === "" || message.value == null) {
        messageErrorMessages.push("Message is required");
        message.classList.add("error");
        messageErrorIcon.classList.add("visable");
    }

    if (message.value.length > 500) {
        messageErrorMessages.push("Must be less than 500 characters");
        message.classList.add("error");
        messageErrorIcon.classList.add("visable");
    }

    if (message.value.length < 10) {
        messageErrorMessages.push("Must be more than 10 characters");
        message.classList.add("error");
        messageErrorIcon.classList.add("visable");
    }

    if (messageErrorMessages.length > 0) {
        e.preventDefault();
        errorMessageElement.innerText = messageErrorMessages.join(", ");
    }
    
});

function validateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.match(mailformat)){
            return true;
        }
        else{
            return false;
        }
}