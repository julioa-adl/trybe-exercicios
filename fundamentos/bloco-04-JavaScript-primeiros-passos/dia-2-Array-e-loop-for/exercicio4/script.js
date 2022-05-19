let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}
let divisor = numbers.length;
let resultado = soma / divisor;

if (resultado > 20) {
  console.log('resultado = ',resultado,' valor maior que vinte');
} else {
  console.log('resultado = ',resultado,' valor menos ou igual a vinte');
}