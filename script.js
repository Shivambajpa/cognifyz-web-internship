// Color Change Button

const btn = document.getElementById("colorBtn");

btn.addEventListener("click", function () {

    if(btn.style.backgroundColor === "red"){
        btn.style.backgroundColor = "green";
    }
    else{
        btn.style.backgroundColor = "red";
    }
});


// Greeting Alert

function showGreeting(){

    let hour = new Date().getHours();

    let greeting;

    if(hour < 12){
        greeting = "Good Morning!";
    }
    else if(hour < 18){
        greeting = "Good Afternoon!";
    }
    else{
        greeting = "Good Evening!";
    }

    alert(greeting);
}


// Calculator

function calculate(){

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    let sum = num1 + num2;

    document.getElementById("result").innerText =
        "Result = " + sum;
}