// Exercício 1

// const testingScope = (escopo) => {
//   const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//   const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//   if (escopo === true) {
//     console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
//   } else {
//     console.log(`${elseScope} o que estou fazendo aqui ? :O`);
//   }
// }

// testingScope(false);

// Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenar = () => oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${ordenar(oddsAndEvens)} se encontram ordenados de forma crescente!`);