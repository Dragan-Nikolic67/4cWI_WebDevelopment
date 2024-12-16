let banana = "Banane";
let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let appleAverageWeight = 0.34;
let bananaAverageWeight = 0.22;

console.log("Anzahl Äpfel pro Kilo beträgt " + 1 / appleAverageWeight);
console.log("Anzahl Bananen pro Kilo beträgt " + 1 / bananaAverageWeight);

console.log("8 Äpfel kosten " + applePricePerKilo * (appleAverageWeight * 8) + " Euro")
console.log("17 Bananen kosten " + bananaPricePerKilo * (bananaAverageWeight * 17) + " Euro")

console.log("Eine Tonne Äpfel kostet " + applePricePerKilo * 1000 + " Euro")
console.log("Eine Tonne Bananen kostet " + bananaPricePerKilo * 1000 + " Euro")

