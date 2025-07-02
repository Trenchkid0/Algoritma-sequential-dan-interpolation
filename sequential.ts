import { arrays } from "./merged";

function sequentialSearch(
  wisatas: Array<any>,
  target: string
): { index: number; iterations: number } {
  console.log(wisatas.length);
  let iterations = 0;

  for (let i = 0; i < wisatas.length; i++) {
    iterations++;
    if (wisatas[i].nama === target) {
      return { index: i, iterations };
    }
  }

  return { index: -1, iterations };
}

arrays.sort((a, b) => a.nama.localeCompare(b.nama));

// Test with 10 data points - Begin value
// Test with 10 data points
const slicedArray10 = arrays.slice(0, 10);
let result10Begin = sequentialSearch(slicedArray10, slicedArray10[0].nama);
console.log(`10 data points - Begin value: ${slicedArray10[0].nama}`);
console.log(
  `Index: ${result10Begin.index}, Iterations: ${result10Begin.iterations}`
);

let result10Middle = sequentialSearch(
  slicedArray10,
  slicedArray10[Math.floor(slicedArray10.length / 2)].nama
);
console.log(
  `10 data points - Middle value: ${
    slicedArray10[Math.floor(slicedArray10.length / 2)].nama
  }`
);
console.log(
  `Index: ${result10Middle.index}, Iterations: ${result10Middle.iterations}`
);

let result10End = sequentialSearch(
  slicedArray10,
  slicedArray10[slicedArray10.length - 1].nama
);
console.log(
  `10 data points - End value: ${slicedArray10[slicedArray10.length - 1].nama}`
);
console.log(
  `Index: ${result10End.index}, Iterations: ${result10End.iterations}`
);

// Test with 100 data points
const slicedArray100 = arrays.slice(0, 100);
let result100Begin = sequentialSearch(slicedArray100, slicedArray100[0].nama);
console.log(`100 data points - Begin value: ${slicedArray100[0].nama}`);
console.log(
  `Index: ${result100Begin.index}, Iterations: ${result100Begin.iterations}`
);

let result100Middle = sequentialSearch(
  slicedArray100,
  slicedArray100[Math.floor(slicedArray100.length / 2)].nama
);
console.log(
  `100 data points - Middle value: ${
    slicedArray100[Math.floor(slicedArray100.length / 2)].nama
  }`
);
console.log(
  `Index: ${result100Middle.index}, Iterations: ${result100Middle.iterations}`
);

let result100End = sequentialSearch(
  slicedArray100,
  slicedArray100[slicedArray100.length - 1].nama
);
console.log(
  `100 data points - End value: ${
    slicedArray100[slicedArray100.length - 1].nama
  }`
);
console.log(
  `Index: ${result100End.index}, Iterations: ${result100End.iterations}`
);

// Similarly for 1000, 2000, and 3000 data points
// Test with 1000 data points
const slicedArray1000 = arrays.slice(0, 1000);
let result1000Begin = sequentialSearch(
  slicedArray1000,
  slicedArray1000[0].nama
);
console.log(`1000 data points - Begin value: ${slicedArray1000[0].nama}`);
console.log(
  `Index: ${result1000Begin.index}, Iterations: ${result1000Begin.iterations}`
);

let result1000Middle = sequentialSearch(
  slicedArray1000,
  slicedArray1000[Math.floor(slicedArray1000.length / 2)].nama
);
console.log(
  `1000 data points - Middle value: ${
    slicedArray1000[Math.floor(slicedArray1000.length / 2)].nama
  }`
);
console.log(
  `Index: ${result1000Middle.index}, Iterations: ${result1000Middle.iterations}`
);

let result1000End = sequentialSearch(
  slicedArray1000,
  slicedArray1000[slicedArray1000.length - 1].nama
);
console.log(
  `1000 data points - End value: ${
    slicedArray1000[slicedArray1000.length - 1].nama
  }`
);
console.log(
  `Index: ${result1000End.index}, Iterations: ${result1000End.iterations}`
);

// Test with 2000 data points
const slicedArray2000 = arrays.slice(0, 2000);
let result2000Begin = sequentialSearch(
  slicedArray2000,
  slicedArray2000[0].nama
);
console.log(`2000 data points - Begin value: ${slicedArray2000[0].nama}`);
console.log(
  `Index: ${result2000Begin.index}, Iterations: ${result2000Begin.iterations}`
);

let result2000Middle = sequentialSearch(
  slicedArray2000,
  slicedArray2000[Math.floor(slicedArray2000.length / 2)].nama
);
console.log(
  `2000 data points - Middle value: ${
    slicedArray2000[Math.floor(slicedArray2000.length / 2)].nama
  }`
);
console.log(
  `Index: ${result2000Middle.index}, Iterations: ${result2000Middle.iterations}`
);

let result2000End = sequentialSearch(
  slicedArray2000,
  slicedArray2000[slicedArray2000.length - 1].nama
);
console.log(
  `2000 data points - End value: ${
    slicedArray2000[slicedArray2000.length - 1].nama
  }`
);
console.log(
  `Index: ${result2000End.index}, Iterations: ${result2000End.iterations}`
);

// Test with 3000 data points
const slicedArray3000 = arrays.slice(0, 3000);
let result3000Begin = sequentialSearch(
  slicedArray3000,
  slicedArray3000[0].nama
);
console.log(`3000 data points - Begin value: ${slicedArray3000[0].nama}`);
console.log(
  `Index: ${result3000Begin.index}, Iterations: ${result3000Begin.iterations}`
);

let result3000Middle = sequentialSearch(
  slicedArray3000,
  slicedArray3000[Math.floor(slicedArray3000.length / 2)].nama
);
console.log(
  `3000 data points - Middle value: ${
    slicedArray3000[Math.floor(slicedArray3000.length / 2)].nama
  }`
);
console.log(
  `Index: ${result3000Middle.index}, Iterations: ${result3000Middle.iterations}`
);

let result3000End = sequentialSearch(
  slicedArray3000,
  slicedArray3000[slicedArray3000.length - 1].nama
);
console.log(
  `3000 data points - End value: ${
    slicedArray3000[slicedArray3000.length - 1].nama
  }`
);
console.log(
  `Index: ${result3000End.index}, Iterations: ${result3000End.iterations}`
);
