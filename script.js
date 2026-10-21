/*
“JavaScript is listening. When the user clicks the button, JavaScript reacts.”

JavaScript responds to user actions.

document.getElementById("myButton").addEventListener("click", function() {
    alert("You clicked the button!");
});


2222
JavaScript changes page content without reloading.

/*document.getElementById("myButton").onclick = function() {
    document.getElementById("title").textContent =
        "JavaScript changed my website!";

    document.getElementById("myImage").src = "js_logo.jpg";
};

JavaScript changes page content without reloading.

3333
JavaScript checks conditions and makes decisions.

document.getElementById("myButton").onclick = function() {
    let answer = confirm("Do you want to keep learning?");

    if (answer) {
        document.getElementById("title").textContent =
            "Great! Keep learning!";
    } else {
        document.getElementById("title").textContent =
            "Give it a try!";
    }
};

4444
JavaScript can combine user input, logic, and dynamic content.

document.getElementById("myButton").onclick = function() {
    let name = prompt("What is your name?");

    if (name) {
        document.getElementById("title").textContent =
            "Hello, " + name + "!";
    } else {
        document.getElementById("title").textContent =
            "Welcome, visitor!";
    }
};