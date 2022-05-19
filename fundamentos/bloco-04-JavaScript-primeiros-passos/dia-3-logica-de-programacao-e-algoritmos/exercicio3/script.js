let array = ['java', 'javascript', 'python', 'html', 'css'];

for (index = 0; index < array.length; index += 1) {
  for (index2 = 0; index2 < array.length; index2 += 1) {
    if (array[index].length > array[index2].length) {
      let trade = array[index];
      array[index] = array[index2];
      array[index2] = trade;
    }
  }
}
console.log('maior: ',array[0]);
console.log('manor: ',array[array.length-1]);