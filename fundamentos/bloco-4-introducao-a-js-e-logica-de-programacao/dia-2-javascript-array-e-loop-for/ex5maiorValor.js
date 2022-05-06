let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valormaior = 0;
for (contador = 0; contador < numbers.length; contador += 1) {
    if (valormaior < numbers[contador]) {
        valormaior = numbers[contador]
    }
}
console.log(valormaior);