let sum = 0;
for (let i = 7; i < 344; i++){
    if(i % 12 == 0){
        sum += i *3;
    } else if(i % 2 == 0){
        sum = sum +i;
    }
    
}
console.log(sum)


let data = "Super Duper".split("");
let string = "";
for(let i = 0; i <= data.length; i++){
  if (data[i] == "e" || data[i] == "u"){
    string = string + "x";
  } else{
    string = string + data[i];
  }
}
console.log(string);

let num = 100;
while (num > 24){
    if (num == 50 || num == 40 || num == 30){
        console.log("no number")
    } else{
        console.log(num)
    }
    num = num -5;
}