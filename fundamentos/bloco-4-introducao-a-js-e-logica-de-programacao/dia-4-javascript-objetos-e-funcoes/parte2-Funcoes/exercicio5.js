let contador = [];
function numeroMaisRepetido(nmr) {
        for (cont in nmr) {
            for (index in nmr) {
                if (nmr[index] === nmr[cont]) {
                contador[index] += 1
            }
        }
    }
}
numeroMaisRepetido([2, 3, 2, 5, 8, 2, 3])
console.log(contador);

//NÃO RESOLVIDO!