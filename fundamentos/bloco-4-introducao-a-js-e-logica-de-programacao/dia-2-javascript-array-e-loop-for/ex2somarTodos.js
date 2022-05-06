let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somatotal = 0;
for (contador = 0; contador < numbers.length; contador += 1) {
    somatotal = somatotal + numbers[contador];
}
console.log("A soma total é: " + somatotal);