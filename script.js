// Welcome Popup

window.onload = function () {
    alert(
        "🏀 Welcome to Basketball Club!\n\nJoin our team and become part of a winning culture."
    );
};


// Registration Form Validation

document
.getElementById("registrationForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name =
        document.getElementById("name").value.trim();

    let email =
        document.getElementById("email").value.trim();

    let phone =
        document.getElementById("phone").value.trim();

    let gender =
        document.getElementById("gender").value;

    let message =
        document.getElementById("message");

    // Email Validation

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Please enter a valid email address.");
        return;
    }

    // Phone Validation

    let phonePattern =
        /^[0-9]{10,15}$/;

    if(!phonePattern.test(phone)){
        alert(
            "Phone number must contain only numbers and be 10-15 digits long."
        );
        return;
    }

    message.innerHTML =
        `✅ Registration Successful! Welcome ${name}.`;

    document.getElementById("registrationForm").reset();

});
