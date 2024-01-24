let array = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < array.length; i++) {
  let firstDigit = String(array[i])[0];
  if (firstDigit === '1' || firstDigit === '2' || firstDigit === '5') {
    console.log(array[i]);
  }
}