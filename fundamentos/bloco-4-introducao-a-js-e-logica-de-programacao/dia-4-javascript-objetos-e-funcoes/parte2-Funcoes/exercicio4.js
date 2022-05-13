let maior = 0;
let nome = null;
function array(numb) {
    for (cont in numb) {
        let tamanho = numb[cont].length;
        if (tamanho >= maior) {
            maior = tamanho;
            nome = numb[cont];
        }
    }
}
array(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
console.log(nome)