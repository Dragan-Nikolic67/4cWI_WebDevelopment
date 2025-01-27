function addieren(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) + parseFloat(num2);

    console.log(num1)
    console.log(result);

    document.getElementById('Result').textContent = result;

}

function subtrahieren(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) - parseFloat(num2);

    console.log(num1)
    console.log(result);
    document.getElementById('Result').textContent = result;

}

function multiplizieren(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) * parseFloat(num2);

    console.log(num1)
    console.log(result);
    document.getElementById('Result').textContent = result;

}

function dividieren(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) / parseFloat(num2);

    console.log(num1)
    console.log(result);
    document.getElementById('Result').textContent = result;

}


