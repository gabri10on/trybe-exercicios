let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorMenor = numbers[0];
for (contador = 0; contador < numbers.length; contador += 1) {
    if (valorMenor > numbers[contador]) {
        valorMenor = numbers[contador]
    }
}
console.log(valorMenor);