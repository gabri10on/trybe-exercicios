let maior = null;
function array(numb) {
    for (cont in numb) {
        if (numb[cont] <= maior) {
            maior = cont;
        }
    }
}
array([2, 4, 6, 7, 10, 0, -3]);
console.log(maior)