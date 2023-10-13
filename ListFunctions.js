
function customMap(arr, callback) {
  let mappedArray = [];
  for (let i = 0; i < arr.length; i++) {
    mappedArray.push(callback(arr[i]));
  }
  return mappedArray;
}

function customFilter(arr, callback) {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

function customReduce(arr, callback, initialValue) {
  let accumulator = initialValue === undefined ? arr[0] : initialValue;
  let startIndex = initialValue === undefined ? 1 : 0;

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
}

function customForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

const numbers = [1, 2, 3, 4, 5];

// Map example
const mappedNumbers = customMap(numbers, (num) => num * 2);
console.log(mappedNumbers);

// Filter example
const filteredNumbers = customFilter(numbers, (num) => num % 2 === 0);
console.log(filteredNumbers);

// Reduce example
const product = customReduce(numbers, (accumulator, current) => accumulator * current, 1);
console.log(product);

// ForEach example
customForEach(numbers, (num) => console.log(num * 3));

