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

const testingScope = ((escopo) => { 
  let ifScope = escopo === true ? 'Não devo ser utilizada fora do meu escopo (if)' : 'Não devo ser utilizada fora meu escopo (else)';
  ifScope = escopo === true ? ifScope + ' ótimo, fui utilizada no escopo !' : ifScope
  return ifScope
})
console.log(`${testingScope(true)}`);

//ex2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const compararNumeros = (a, b) => {
  return a - b;
}

oddsAndEvens.sort(compararNumeros)

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);