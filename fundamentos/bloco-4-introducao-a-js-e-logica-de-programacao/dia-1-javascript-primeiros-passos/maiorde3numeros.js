const numero1 = 2;
const numero2 = 5;
const numero3 = 5;
if (numero1 > numero2 && numero1 > numero3) {
    console.log(numero1);
}
else if (numero2 > numero1 && numero2 > numero3) {
    console.log(numero2);
}
else if (numero3 > numero1 && numero3 > numero2) {
    console.log(numero3);
}
else {
    console.log("Contém números iguas.");
}