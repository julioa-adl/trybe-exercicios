let lista = [];
for ( let index = 1; index <= 25; index += 1) {
  lista.push(index);
}
console.log(lista);

for (let divisao of lista) {
  divisao = divisao / 2;
  console.log(divisao);
}