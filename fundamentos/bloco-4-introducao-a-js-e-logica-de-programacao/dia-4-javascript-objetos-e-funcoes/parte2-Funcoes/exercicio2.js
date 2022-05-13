let maior = null;
function array(numb) {
    for (let cont = 0; cont < numb.length; cont = cont + 1) {
        if (numb[cont] >= maior) {
            maior = cont;
        }
    }
}
array([2, 3, 6, 7, 10, 1]);
console.log(maior)