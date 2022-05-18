let menor = null;
function array(numb) {
    for (cont in numb) {
        if (numb[cont] <= maior) {
            menor = cont;
        }
    }
}
array([2, 4, 6, 7, 10, 0, -3]);
console.log(menor)