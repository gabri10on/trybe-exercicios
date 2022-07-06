// function testingScope(escopo) {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
// }

// testingScope(true);

//ex1

const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
const escopo = true;
const testingScope = (escopo) => (escopo === true) ? 'ótimo, fui utilizada no escopo !' : 'Não devo ser utilizada fora meu escopo (else)';
console.log(`${ifScope}, ${testingScope(true)}`)

//ex2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function compararNumeros(a, b) {
  return a - b;
}

oddsAndEvens.sort(compararNumeros)

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉