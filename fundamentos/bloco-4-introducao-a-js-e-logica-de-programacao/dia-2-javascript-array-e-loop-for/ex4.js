let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somatotal = 0;
for (contador = 0; contador < numbers.length; contador += 1) {
    somatotal = somatotal + numbers[contador];
}
somatotal = somatotal / numbers.length;
if (somatotal > 20) {
    console.log("Valor maior que 20.");
}
else {
    console.log("Valor menor ou igual a 20.");
}