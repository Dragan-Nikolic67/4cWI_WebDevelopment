
//Aufgabe 1
function decider(a, callback) {
    if (a > 100){
     callback();
    }
  }
  
function name1(){
console.log("Damien")
  }

  decider(102, name1);

  //Aufgabe2
  function orderPizza (pizzaName, callback){
    console.log("Order Pizza " + pizzaName + " ready in 5 seconds")
    console.log("5")
    console.log("4")
    console.log("3")
    console.log("2")
    console.log("1")
    console.log("Pizza " + pizzaName + " is ready! The price is " + callback() + " Dollars")

  }

  function price(){
    let randomNumber = Math.random() *10 + 10;
    let random = Math.floor(randomNumber);

    return random
  }

  orderPizza("Diavolo", price)
  