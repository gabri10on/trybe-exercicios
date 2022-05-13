let maior = 0;
let nome = null;
function array(numb) {
    for (let cont = 0; cont < numb.length; cont = cont + 1) {
        let tamanho = numb[cont].length;
        if (tamanho >= maior) {
            maior = tamanho;
            nome = numb[cont];
        }
    }
}
array(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
console.log(nome)